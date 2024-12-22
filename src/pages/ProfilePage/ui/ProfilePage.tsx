import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import ProfilePageHeader from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useParams } from "react-router-dom";
import { Page } from "widget/Page/Page";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import cls from "./ProfilePage.module.scss";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const profile = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);
    const { id } = useParams<{id: string}>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: "Ошибка сервера",
        [ValidateProfileError.INCORRECT_AGE]: "Проверьте поле: возраст",
        [ValidateProfileError.INCORRECT_USER_DATA]: "Неверное имя или фамилия",
        [ValidateProfileError.INCORRECT_CITY]: "Поле город не заполнено",
        [ValidateProfileError.NO_DATA]: "Данные не получены",
    };

    useEffect(() => {
        if (!id) return;

        dispatch(fetchProfileData(id));
    }, [dispatch, id]);

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value || "" }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || "" }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        if (!new RegExp("^[0-9]+$").test(value)) return;

        dispatch(profileActions.updateProfile({ age: Number(value) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ProfilePage, {}, [className])}>
                <VStack gap="24">
                    <ProfilePageHeader />
                    {validateErrors && validateErrors.length > 0 && validateErrors.map((err) => (
                        <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />
                    ))}
                    <ProfileCard
                        data={profile}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeFirstName={onChangeFirstName}
                        onChangeLastName={onChangeLastName}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeAvatar={onChangeAvatar}
                        onChangeUsername={onChangeUsername}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
