import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import PublicLayout from "../layout/public";
import Link from "next/link";

export function CampaingListPage({ campaigns, header }) {
  return (
    <>
      {header ? (
        <div className="my-6 px-4 md:my-8 lg:my-10 lg:px-6" >
          <h1
            className="text-3xl text-center font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
            Campagnes en cours
          </h1>
          <p className="text-sm text-center my-2 text-gray-500" >{"Que votre générosité soit vue et récompensée de l'Eternel"}</p>
        </div>
      ) : null}
      <div
        className="grid max-w-5xl gap-6 px-4 mx-auto lg:px-6 md:grid-cols-2 lg:grid-cols-3">
        {campaigns && campaigns.map(camp => (
          <div
            key={camp.campaignId}
            className="flex flex-col rounded-lg overflow-hidden border border-gray-300 shadow-sm cursor-pointer hover:scale-105 transition-transform dark:border-gray-800 dark:border-gray-800">
            <div className="relative">
              <img
                alt="Campaign"
                className="aspect-video object-cover"
                height="400"
                src={camp.photo}
                width="600" />
              <Badge className="absolute top-4 start-4" color="info">
                {camp.category}
              </Badge>
            </div>
            <div className="flex-1 grid gap-2 p-4">
              <h3 className="text-xl font-semibold tracking-tight">{camp.name}</h3>
              <p className="text-sm line-clamp-3">{camp.short}</p>
            </div>
            <Link href={"/campaigns/" + camp.campaignId} className="grid w-full p-4 items-center">
              <Button className="w-full justify-start" variant="default">
                En savoir plus
              </Button>
            </Link>
          </div>
        ))}

      </div>
    </>
  );
}
