import { Profile } from "entities/Profile";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency } from "entities/Currency/model/types/currency";
import { CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import style from "./Profile.module.scss";


interface ProfileCardProps {
    data?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeFirstName: (value: string) => void,
    onChangeLastName: (value: string) => void,
    onChangeAge: (value: string) => void,
    onChangeCity: (value: string) => void,
    onChangeAvatar: (value: string) => void,
    onChangeUsername: (value: string) => void,
    onChangeCurrency: (value: Currency) => void,
    onChangeCountry: (value: Country) => void,

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        isLoading,
        error,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const mods: Mods = {
        [style.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(style.ProfileCard, { [style.loading]: true })}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(style.ProfileCard, {}, [style.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title="Произошла ошибка при загрузке"
                    text={error}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(style.ProfileCard, mods, [])}>

            <div className={style.data}>
                {data?.avatar && <Avatar src={data?.avatar} size={180} />}
                <Input
                    value={data?.first}
                    placeholder="Ваше имя"
                    className={style.input}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Ваше фамилия"
                    className={style.input}
                    onChange={onChangeLastName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder="Ваш возраст"
                    className={style.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder="Город"
                    className={style.input}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder="Аватар"
                    className={style.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder="Имя пользователя"
                    className={style.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={style.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readonly}
                />
                <CountrySelect
                    className={style.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
