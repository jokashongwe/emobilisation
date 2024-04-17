import { getContent, getCampaigns } from '@/utils/supabase/campaings';
import { createClient } from '@/utils/supabase/server';
import HomeView from "@/views/home";


async function getChurch() {
  const supabase = createClient();
  const { data } = await supabase.from("TChurch").select().eq("id", process.env.NEXT_PUBLIC_CHURCH_ID);
  return data[0]
}

export default async function Home() {
  const church = await getChurch();
  const pageContent = await getContent("home", process.env.NEXT_PUBLIC_CHURCH_ID);
  const campaings = await getCampaigns(process.env.NEXT_PUBLIC_CHURCH_ID);
  return (
    <HomeView pageCampaings={campaings} data={church} pageContent={pageContent} />
  );
}
