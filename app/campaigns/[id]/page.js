import { CampaignDetailPage } from "@/components/component/campain-detail-page";
import PublicLayout from "@/components/layout/public";
import { getOneCampaing, getChurch } from "@/utils/supabase/campaings";

export default async function CampainDetail({ params }) {
    const { id } = params;    
    const campaign = await getOneCampaing(id);
    const church = await getChurch();

    return (
        <PublicLayout logo={church.logo} name={church.name} >
            <CampaignDetailPage campaign={campaign} />
        </PublicLayout>
    );
}
