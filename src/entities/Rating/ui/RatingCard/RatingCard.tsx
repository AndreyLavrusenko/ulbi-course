import { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./RatingCard.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Drawer } from "@/shared/ui/Drawer/Drawer";


interface RatingCardProps {
	className?: string,
    title?: string,
    feedbackTitle?: string,
    hasFeedback?: boolean,
    onCancel?: (starsCount: number) => void,
    onAccept?: (starsCount: number, feedback?: string) => void
}


export const RatingCard = (props: RatingCardProps) => {
    const {
        className, feedbackTitle, title, hasFeedback, onCancel, onAccept,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState("");

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
        setIsModalOpen(true);
    }, [hasFeedback, onAccept]);

    const onAcceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [starsCount, feedback, onAccept]);

    const onCancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder="Ваш отзыв" />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="16">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button onClick={onCancelHandler} theme={ButtonTheme.CLEAR}>Закрыть</Button>
                            <Button onClick={onAcceptHandler} theme={ButtonTheme.PRIMARY}>Отправить</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer onClose={onCancelHandler} isOpen={isModalOpen} lazy>
                    <VStack max gap="8">
                        {modalContent}
                        <Button onClick={onAcceptHandler} fullWidth theme={ButtonTheme.PRIMARY}>Отправить</Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
};
