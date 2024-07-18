import { useSelector } from "react-redux";
import { getProfileData, getProfileError, getProfileLoading } from "entities/Profile";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import style from "./Profile.module.scss";

export const ProfileCard = () => {

    const profile = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={style.ProfileCard}>
            <div className={style.header}>
                <Text title="Профиль" />
                <Button theme={ButtonTheme.SECONDARY}>Редактировать</Button>
            </div>
            <div className={style.data}>
                <Input
                    value={profile?.first}
                    placeholder="Ваше имя"
                    className={style.input}
                />
                <Input
                    value={profile?.lastname}
                    placeholder="Ваше фамилия"
                    className={style.input}
                />
            </div>
        </div>
    );
};
