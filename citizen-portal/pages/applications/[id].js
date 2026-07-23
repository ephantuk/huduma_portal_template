import ApplicationDetail from "@/views/ApplicationDetail";
import PortalLayout from "@/common/components/PortalLayout";
import { getApplicationById, getApplicationTimeline } from "@/apis/applications";

const applicationDetail = () => null;
applicationDetail.View = ApplicationDetail;
applicationDetail.Layout = PortalLayout;

export async function getServerSideProps({ params }) {
  const application = await getApplicationById(params.id);
  const timeline = await getApplicationTimeline(application.id);
  return { props: { application, timeline } };
}

export default applicationDetail;
