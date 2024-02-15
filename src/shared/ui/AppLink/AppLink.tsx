import { classNames } from 'shared/lib/classNames/classNames';

import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );

};
