import React, { useCallback, useMemo } from "react";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData, 
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import style from "./ProfilePageHeader.module.scss";

const ProfilePageHeader = () => {
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = useMemo(() => profileData?.id === String(authData?.id), [authData, profileData]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveProfile = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={style.header} justify="between" max>
            <Text title="Профиль" />
            {canEdit && (
                <HStack gap="8" className={style.HeaderButton}>
                    {
                        readonly
                            ? <Button theme={ButtonTheme.SECONDARY} onClick={onEdit}>Редактировать</Button>
                            : (
                                <>
                                    <Button theme={ButtonTheme.SECONDARY} onClick={onSaveProfile}>Сохранить</Button>
                                    <Button theme={ButtonTheme.CLEAR} onClick={onCancelEdit}>Отменить</Button>
                                </>
                            )
                    }
                </HStack>
            )}
        </HStack>
    );
};

export default ProfilePageHeader;
