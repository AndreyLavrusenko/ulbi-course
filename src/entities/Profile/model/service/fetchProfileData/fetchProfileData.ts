import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>("/profile");

            return response.data;

        } catch (err) {
            return thunkAPI.rejectWithValue("Ошибка получения данных о пользователе");
        }
    },
);
