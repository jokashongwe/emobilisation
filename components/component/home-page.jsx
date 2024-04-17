
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CampaignItem } from "./campain-item";
import PublicLayout from "../layout/public";

export function HomePage(props) {
  const { church, campaigns, content } = props;

  const RenderCampaign = ({ campaign }) => {
    if (!campaign) return null;
    return (
      <li className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ChevronRightIcon className="h-4 w-4" />
          <div className="text-sm font-bold">{campaign.name}</div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {campaign.short}
        </p>
      </li>
    )
  }

  return (
    <PublicLayout logo={church.logo} name={church.name} >
      <section className="w-full min-h-[100dvh] md:py-12 lg:py-12">
        <div className="container px-4 md:px-6">
          <div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Banner"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="400"
              src={church.photo}
              width="600" />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-3">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {content.heading}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {"Votre don nous aide à servir la communauté et à répandre l'amour et la compassion. Nous vous remercions de votre générosité."}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={content.action.path}>
                  {content.action.name}
                </Link>
              </div>
            </div>
          </div>
          <div className="invisible md:visible" >
            <p className="max-w-[600px] text-gray-500 md:text-md dark:text-gray-400">
              {content.detail}  
            </p>
            <br />
            <p className="max-w-[600px] text-gray-500 md:text-md dark:text-gray-400" >{content.contactPhone} {church.phone} {content.contactEmail} <strong>{church.email}</strong></p>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-300 my-4 py-2 md:py-4 lg:py-6">
        <div className="my-6 px-4 md:my-8 lg:my-10 lg:px-6" >
          <h1
            className="text-3xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none">
            Campagnes en cours
          </h1>
        </div>
        <div className="container px-4 md:px-6 md:my-8 lg:my-10 lg:px-6">
          <div className="mx-auto max-w-5xl items-center">
            <ul className="grid md:grid-cols-3 md:gap-6 grid-cols-1 gap-3 ">
              {campaigns && campaigns.map(camp => <CampaignItem key={camp.id} campaign={camp} />)}
            </ul>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
