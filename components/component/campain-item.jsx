import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CardContent, Card, CardHeader } from "@/components/ui/card"
import Link from "next/link";

export function CampaignItem({ campaign }) {
  const percentage = Math.round(((campaign.current / campaign.amount) * 100))
  return (
    (<Card className="w-full max-w-md overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <CardHeader className="p-0 overflow-hidden" >
        <img
          alt="logo"
          className="mb-2 aspect-video object-contain object-contain"
          height="180"
          src={campaign.photo}
          width="auto" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Badge className="self-start" variant="info">
            {campaign.category}
          </Badge>
          <div>
            <p className="text-md font-bold" >{campaign.name}</p >
          </div>
          {/* <div>Total</div>
          <div className="font-semibold">${campaign.amount}</div>
          <div>Actuel</div>
          <div className="font-semibold">${campaign.current}</div> */}
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10">
            <div className="text-gray-500">{percentage}%</div>
          </div>
          <Progress className="flex-1 h-2" value={percentage} />
        </div>
        <div
          className="line-clamp-2">
          {campaign.short}
        </div>
        <div className="line-clamp-3">
          {campaign.subtitle}
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#">
            Contribuer
          </Link>
        </div>
      </CardContent>
    </Card>)
  );
}
