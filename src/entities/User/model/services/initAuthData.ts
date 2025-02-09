import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { LOCALSTORAGE_USER_KEY } from "@/shared/const/localstorage";
import { getUserDataByIdQuery } from "@/entities/User/api/userApi";

export const initAuthData = createAsyncThunk<
	User,
	void,
	ThunkConfig<string>
>(
	"user/initAuthData",
	async (_, thunkAPI) => {
		const {rejectWithValue, dispatch} = thunkAPI

		const userId = localStorage.getItem(LOCALSTORAGE_USER_KEY)

		if (userId === null || userId === undefined) {
			return rejectWithValue("ID пользователя не найден")
		}

		try {

			const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()

			if (!response) {
				return rejectWithValue("Ошибка при выполнении запроса")
			}

			return response

		} catch (err) {
			console.log(err)
			return rejectWithValue("Ошибка при выполнении запроса")
		}
})