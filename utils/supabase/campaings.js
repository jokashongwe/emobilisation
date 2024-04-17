import { createClient } from "./server";

export async function getContent(pageName, churchId) {
    const supabase = createClient();
    const { data } = await supabase.from("TContent")
        .select()
        .eq("churchId", churchId)
    return data[0]
}

export async function getCampaigns(churchId) {
    const supabase = createClient();
    const { data } = await supabase.from("TCampaign")
        .select()
        .eq("churchId", churchId)
    return data
}