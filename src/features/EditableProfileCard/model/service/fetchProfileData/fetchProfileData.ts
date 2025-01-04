import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "@/entities/Profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (profileId, thunkAPI) => {

        try {
            const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error("error");
            }

            return response.data;

        } catch (err) {
            return thunkAPI.rejectWithValue("Ошибка получения данных о пользователе");
        }
    },
);
