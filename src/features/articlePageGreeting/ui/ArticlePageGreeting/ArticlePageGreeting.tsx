import { memo, useEffect, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Text } from "@/shared/ui/Text/Text";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const ArticlePageGreeting = memo(() => {
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const { isFirstOnArticlePage } = useJsonSettings();

    useEffect(() => {
        if (isFirstOnArticlePage) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isFirstOnArticlePage: false }));
        }
    }, [isFirstOnArticlePage, dispatch]);

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Text
                title="Добро пожаловать"
                text="Здесь вы можете просматритьва статьи на различные темы"
            />
        </Modal>
    );
});
