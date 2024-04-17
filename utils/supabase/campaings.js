import { createClient } from "./server";

export async function getContent(pageName, churchId) {
    const supabase = createClient();
    const { data } = await supabase.from("TContent")
        .select()
        .eq("churchId", churchId)
    return data[0]
}

export async function getChurch() {
    const supabase = createClient();
    const { data } = await supabase.from("TChurch").select().eq("id", process.env.NEXT_PUBLIC_CHURCH_ID);
    return data[0]
}

export async function getOneCampaing(id) {
    const supabase = createClient();
    const { data } = await supabase.from("TCampaign")
        .select()
        .eq("id", id)
    return data[0]
}

export async function getCampaigns(churchId) {
    const supabase = createClient();
    const { data } = await supabase.from("TCampaign")
        .select()
        .eq("churchId", churchId)
    return data
}