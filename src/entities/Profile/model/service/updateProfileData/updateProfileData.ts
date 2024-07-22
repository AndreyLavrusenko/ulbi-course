import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm, Profile } from "entities/Profile";
import { validateProfile } from "entities/Profile/model/service/validateProfile/validateProfile";
import { ValidateProfileError } from "entities/Profile/model/types/profileSchema";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        try {

            const formData = getProfileForm(thunkAPI.getState());

            const errors = validateProfile(formData);

            if (errors.length) {
                return thunkAPI.rejectWithValue(errors);
            }

            const response = await thunkAPI.extra.api.put<Profile>("/profile", formData);

            return response.data;

        } catch (err) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
