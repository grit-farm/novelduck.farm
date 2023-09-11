import Custom500 from "../error/500";
import ClientPage from "./page.client";

interface Props {}

const NovelsDetailPage = ({}: Props) => {
  try {
    return <ClientPage />;
  } catch (e) {
    return <Custom500 />;
  }
};

export default NovelsDetailPage;
