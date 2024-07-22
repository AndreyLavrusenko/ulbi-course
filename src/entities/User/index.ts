import { userActions, userReducer } from "entities/User/model/slice/userSlice";
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { getUserInitied } from "entities/User/model/selectors/getUserInitied/getUserInitied";
import { User, UserSchema } from "./model/types/user";

export {
    userActions,
    userReducer,
    User,
    UserSchema,
    getUserAuthData,
    getUserInitied,
};
