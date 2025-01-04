import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widget/Page/Page";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "@/shared/ui/Text/Text";
import cls from "./ProfilePage.module.scss";


interface ProfilePageProps {
    className?: string;
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text title="Статья не найдена" />;
    }
    
    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap="24">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
