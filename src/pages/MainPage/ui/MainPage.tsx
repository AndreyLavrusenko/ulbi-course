import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {

    const { t } = useTranslation('main');

    return (
        <h1>{t('Главная страница')}</h1>
    );

};

export default MainPage;
