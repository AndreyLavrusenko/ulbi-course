import { classNames } from "shared/lib/classNames/classNames";

import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";
import cls from "./ProfilePage.module.scss";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}


const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            Profile Page
        </div>
    </DynamicModuleLoader>
);

export default ProfilePage;
