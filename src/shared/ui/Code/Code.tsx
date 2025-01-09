import React, { ReactNode, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import cls from "./Code.module.scss";

interface Props {
	className?: string;
	text: string;
}

export const Code = (props: Props) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} onClick={onCopy}>Копировать</Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
