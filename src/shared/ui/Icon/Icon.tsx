import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";


interface Props extends React.SVGProps<SVGSVGElement> {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ Svg, className, ...otherProps }: Props) => (
    <Svg {...otherProps} className={classNames(cls.Icon, {}, [className])} />
));

