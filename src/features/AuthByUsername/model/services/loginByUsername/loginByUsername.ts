import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { LOCALSTORAGE_USER_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
	username: string,
	password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/login", authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuth(response.data));

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue("Введен неверный логин или пароль");
        }
    },
);
