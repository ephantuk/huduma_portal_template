import Home from "@/views/Home";
import PortalLayout from "@/common/components/PortalLayout";
import { getServices, getCategories } from "@/apis/services";
import { getMyApplications } from "@/apis/applications";

const home = () => null;
home.View = Home;
home.Layout = PortalLayout;

export async function getServerSideProps() {
  const [services, categories, myApplications] = await Promise.all([
    getServices(),
    getCategories(),
    getMyApplications(),
  ]);
  return { props: { services, categories, myApplications } };
}

export default home;
