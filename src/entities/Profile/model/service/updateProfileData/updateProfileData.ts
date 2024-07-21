import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm, Profile } from "entities/Profile";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        try {

            const formData = getProfileForm(thunkAPI.getState());

            const response = await thunkAPI.extra.api.put<Profile>("/profile", formData);

            return response.data;

        } catch (err) {
            return thunkAPI.rejectWithValue("Ошибка получения данных о пользователе");
        }
    },
);
