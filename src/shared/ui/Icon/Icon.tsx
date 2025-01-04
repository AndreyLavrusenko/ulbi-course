import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";


interface Props {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ Svg, className }: Props) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
));

