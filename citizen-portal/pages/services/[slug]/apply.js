import ApplicationWizard from "@/views/ApplicationWizard";
import PortalLayout from "@/common/components/PortalLayout";
import { getServiceBySlug } from "@/apis/services";

const applyForService = () => null;
applyForService.View = ApplicationWizard;
applyForService.Layout = PortalLayout;

export async function getServerSideProps({ params }) {
  const service = await getServiceBySlug(params.slug);
  return { props: { service, slug: params.slug } };
}

export default applyForService;
