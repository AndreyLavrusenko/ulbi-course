import { Text } from "shared/ui/Text/Text";
import { Page } from "widget/Page/Page";

const ForbiddenPage = () => (
    <Page>
        <Text title="У вас нет доступа к этой странице" />
    </Page>
);

export default ForbiddenPage;
