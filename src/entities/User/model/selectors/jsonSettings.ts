import { buildSelector } from "@/shared/lib/store/buildSelector";
import { JsonSettings } from "@/entities/User/model/types/jsonSettings";
import { Theme } from "@/shared/const/theme";

const defaultJsonSettings: JsonSettings = {
    theme: Theme.LIGHT,
};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state, key: keyof JsonSettings) =>
        state.user?.authData?.jsonSettings?.[key],
);
