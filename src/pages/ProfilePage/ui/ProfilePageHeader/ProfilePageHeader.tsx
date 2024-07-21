import React, { useCallback } from "react";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import style from "./ProfilePageHeader.module.scss";

const ProfilePageHeader = () => {
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

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
        <div className={style.header}>
            <Text title="Профиль" />
            <div className={style.HeaderButton}>
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
            </div>
        </div>
    );
};

export default ProfilePageHeader;
