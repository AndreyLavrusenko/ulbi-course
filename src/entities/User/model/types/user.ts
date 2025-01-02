import { UserRole } from "entities/User/model/const/consts";

export interface User {
	id: number,
	username: string,
	avatar?: string,
	roles: UserRole[]
}

export interface UserSchema {
	authData?: User,
	_inited: boolean
}
