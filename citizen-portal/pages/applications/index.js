import MyApplications from "@/views/MyApplications";
import PortalLayout from "@/common/components/PortalLayout";
import { getMyApplications } from "@/apis/applications";

const applications = () => null;
applications.View = MyApplications;
applications.Layout = PortalLayout;

export async function getServerSideProps() {
  const data = await getMyApplications();
  return { props: { applications: data } };
}

export default applications;
