import { classNames } from "@/shared/lib/classNames/classNames";

import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    addCommentFormSliceActions,
    addCommentFormSliceReducer,
} from "@/features/AddCommentForm/model/slice/addCommentFormSlice";
import { DynamicModuleLoader, ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from "./AddCommentForm.module.scss";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";


interface AddCommentFormProps {
	className?: string,
    onSendComment: (text: string) => void,
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormSliceReducer,
};


const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    const changeTextHandler = useCallback((value: string) => {
        dispatch(addCommentFormSliceActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        dispatch(addCommentFormSliceActions.setText(""));
    }, [dispatch, text, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input placeholder="Введите текст комментария" value={text} onChange={changeTextHandler} />
                <Button onClick={onSendHandler} theme={ButtonTheme.SECONDARY}>Отправить</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
