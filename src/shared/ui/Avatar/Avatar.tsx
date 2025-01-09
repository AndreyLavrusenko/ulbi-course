import { classNames } from "@/shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";
import style from "./Avatar.module.scss";

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
        <img
            src={src}
            style={styles}
            className={classNames(style.avatar, {}, [className])}
            alt="Avatar"
        />
    );
};
