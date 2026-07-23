import History from "@/views/History";
import PortalLayout from "@/common/components/PortalLayout";
import { getApplicationHistory } from "@/apis/applications";

const history = () => null;
history.View = History;
history.Layout = PortalLayout;

export async function getServerSideProps() {
  const records = await getApplicationHistory();
  return { props: { records } };
}

export default history;
