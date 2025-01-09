import { type AddCommentFormSchema } from "@/features/AddCommentForm/model/types/addCommentForm";
import { AddCommentFormLazy } from "@/features/AddCommentForm/ui/AddCommentForm/AddCommentForm.lazy";
import { getAddCommentFormText } from "@/features/AddCommentForm/model/selectors/addCommentFormSelectors";

export {
    AddCommentFormLazy as AddCommentForm,
    AddCommentFormSchema,
    getAddCommentFormText,
};
