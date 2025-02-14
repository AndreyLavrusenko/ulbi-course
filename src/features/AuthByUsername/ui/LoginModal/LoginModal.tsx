import { classNames } from "@/shared/lib/classNames/classNames";

import { Modal } from "@/shared/ui/Modal/Modal";
import { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";


interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}


export const LoginModal = (props: LoginModalProps) => {

    const { className, isOpen, onClose } = props;

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames("", {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
