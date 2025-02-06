import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "@/entities/Profile";
import { validateProfile } from "@/features/EditableProfileCard/model/service/validateProfile/validateProfile";
import {
    getProfileForm,
    ValidateProfileError,
} from "@/features/EditableProfileCard";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
    try {
        const formData = getProfileForm(thunkAPI.getState());

        const errors = validateProfile(formData);

        if (errors.length) {
            return thunkAPI.rejectWithValue(errors);
        }

        const response = await thunkAPI.extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData,
        );

        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
