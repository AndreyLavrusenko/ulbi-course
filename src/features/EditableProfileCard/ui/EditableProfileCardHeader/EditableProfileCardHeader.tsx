import React, { useCallback, useMemo } from "react";
import { Text } from "@/shared/ui/Text/Text";
import { HStack } from "@/shared/ui/Stack";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData, 
} from "@/features/EditableProfileCard";
import { getUserAuthData } from "@/entities/User";

export const EditableProfileCardHeader = () => {
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
        <HStack justify="between" max>
            <Text title="Профиль" />
            {canEdit && (
                <HStack gap="8">
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
