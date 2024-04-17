import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

export function CampaignDetailPage({ campaign }) {
  return (
    <div className="bg-gray-50 py-6 lg:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="space-y-4 lg:order-last">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {campaign.name}
              </h1>
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-normal text-gray-500" >Objectif</span> <span className="font-medium">{campaign.currencySign}{campaign.amount} </span>
                <span className="text-gray-500">—</span>
                <span className="font-normal text-gray-500">Grâce à votre générosité nous faisons ensemble avancer le royaume de Dieu</span>

              </div>
              <div className="pr-5" >
                <Progress className="flex-1 h-2" value={Math.round(campaign.current * 100/ campaign.amount)} />
              </div>
            </div>
            <div className="prose max-w-none">
              <p>
                {campaign.short}
              </p>
              <p>
                {campaign.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="default">
                Faire un don
              </Button>
            </div>
          </div>
          <img
            alt="Cover"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            height="400"
            src={campaign.photo}
            width="720" />
        </div>
      </div>
    </div>
  );
}
