import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "features/AddCommentForm";

const initialState: AddCommentFormSchema = {
    text: "",
    error: "",
};

export const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormSliceActions } = addCommentFormSlice;
export const { reducer: addCommentFormSliceReducer } = addCommentFormSlice;
