import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<User>(
            "/login",
            authData,
        );

        if (!response.data) {
            throw new Error();
        }


        thunkAPI.dispatch(userActions.setAuth(response.data));

        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue("Введен неверный логин или пароль");
    }
});
