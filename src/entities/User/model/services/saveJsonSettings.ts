import { createAsyncThunk } from "@reduxjs/toolkit";
import { JsonSettings } from "@/entities/User/model/types/jsonSettings";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserAuthData } from "@/entities/User";
import { getJsonSettings } from "@/entities/User/model/selectors/jsonSettings";
import { setJsonSettingsMutation } from "../../api/userApi";

export const saveJsonSettings = createAsyncThunk<
	JsonSettings,
	JsonSettings,
	ThunkConfig<string>
> (
	"user/saveJsonSettings",
	async (newJsonSettings, thunkAPI) => {
		const {rejectWithValue, getState, dispatch} = thunkAPI;

		const userData = getUserAuthData(getState())
		const currentSettings = getJsonSettings(getState())

		if (!userData) {
			return rejectWithValue("Пользователь не найден")
		}

 		try {
			const response = await dispatch(setJsonSettingsMutation({
				userId: userData.id,
				jsonSettings: {
					...currentSettings,
					...newJsonSettings,
				}
			})).unwrap()

			if (!response.jsonSettings) {
				return rejectWithValue("Ошибка при сохранении настроек")
			}

			return response.jsonSettings;

		} catch (err) {
			console.log(err)
			return rejectWithValue("Ошибка при сохранении настроек")
		}
	}
)