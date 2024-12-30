import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
    EditableProfileCardHeader,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions, ProfileCard, profileReducer,
    ValidateProfileError,
} from "features/EditableProfileCard";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface EditableProfileCardProps {
    className?: string;
    id: string,
}

const reducers: ReducerList = {
    profile: profileReducer,
};


export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;

    const dispatch = useAppDispatch();

    const profile = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: "Ошибка сервера",
        [ValidateProfileError.INCORRECT_AGE]: "Проверьте поле: возраст",
        [ValidateProfileError.INCORRECT_USER_DATA]: "Неверное имя или фамилия",
        [ValidateProfileError.INCORRECT_CITY]: "Поле город не заполнено",
        [ValidateProfileError.NO_DATA]: "Данные не получены",
    };

    useEffect(() => {
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
            <EditableProfileCardHeader />
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
        </DynamicModuleLoader>
    );
});
