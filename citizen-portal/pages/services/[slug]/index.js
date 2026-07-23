import Roadmap from "@/views/Roadmap";
import PortalLayout from "@/common/components/PortalLayout";
import { getServiceBySlug } from "@/apis/services";
import { getRoadmap } from "@/apis/roadmap";

const serviceRoadmap = () => null;
serviceRoadmap.View = Roadmap;
serviceRoadmap.Layout = PortalLayout;

export async function getServerSideProps({ params }) {
  const [service, roadmap] = await Promise.all([
    getServiceBySlug(params.slug),
    getRoadmap(params.slug),
  ]);
  return { props: { service, roadmap } };
}

export default serviceRoadmap;
