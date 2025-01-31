import { classNames } from "@/shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";
import style from "./Avatar.module.scss";
import {AppImage} from "@/shared/ui/AppImage/AppImage";
import {Skeleton} from "@/shared/ui/Skeleton/Skeleton";

interface Props {
	src?: string,
	size?: number,
	className?: string,
}

export const Avatar = ({ src, size, className }: Props) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <AppImage
            fallback={<Skeleton width={size} height={size} border={'6'} />}
            src={src}
            style={styles}
            className={classNames(style.avatar, {}, [className])}
            alt="Avatar"
        />
    );
};
