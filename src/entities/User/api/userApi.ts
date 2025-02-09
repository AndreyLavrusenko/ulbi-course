import { rtkApi } from "@/shared/api/rtkApi";
import { User } from "@/entities/User";
import { JsonSettings } from "../model/types/jsonSettings";

interface JsonSettingsArg {
	userId: string,
	jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		setJsonSettings: build.mutation<User, JsonSettingsArg>({
			query: (args: JsonSettingsArg) => ({
				url: `/users/${args.userId}`,
				method: "PATCH",
				body: {jsonSettings: args.jsonSettings}
			}),
		}),
		getUserDataById: build.query<User, string>({
			query: (userId) => ({
				url: `/users/${userId}`,
				method: "GET",
			}),
		}),
	}),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;