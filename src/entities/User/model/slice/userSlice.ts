import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_USER_KEY } from "@/shared/const/localstorage";
import { User, UserSchema } from "../types/user";
import { saveJsonSettings } from "@/entities/User/model/services/saveJsonSettings";
import { JsonSettings } from "@/entities/User/model/types/jsonSettings";
import { initAuthData } from "@/entities/User/model/services/initAuthData";

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            localStorage.setItem(
                LOCALSTORAGE_USER_KEY,
                action.payload.id,
            );
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            },
        );
        builder.addCase(initAuthData.fulfilled, (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            state._inited = true
        })
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true
        })
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
