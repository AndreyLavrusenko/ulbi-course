import { UserRole } from "@/entities/User/model/const/consts";
import { JsonSettings } from "@/entities/User/model/types/jsonSettings";

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles: UserRole[];
    jsonSettings: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
