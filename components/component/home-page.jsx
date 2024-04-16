
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HomePage(props) {
  const { church, campaigns } = props;

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
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center my-3">
        <div className="flex items-center justify-center">
          <img
            alt="logo"
            className="mx-2 aspect-video overflow-hidden rounded-xl object-contain object-contain"
            height="180"
            src={church.logo}
            width="180" />

          <span className="sr-only">{church && church.name}</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Accueil
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Donations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Rendez-vous
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Librairie
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-5 md:pt-8 lg:pt-10">
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
                    Soutenir la mission de notre église
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Votre don nous aide à servir la communauté et à répandre l'amour et la compassion. Nous vous remercions de votre générosité.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#">
                    Faire un don
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6">
              <ul className="grid gap-6">
                {campaigns && campaigns.map(camp => <RenderCampaign key={camp.campaignId} campaign={camp} />)}
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Faire un don</h2>
              <p className="text-gray-500 dark:text-gray-400">Saisissez ci-dessous le montant que vous souhaitez donner.</p>
            </div>
            <form className="grid max-w-2xl gap-4 mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <Label className="text-sm" htmlFor="name">
                  Nom Complet
                </Label>
                <div className="flex flex-col gap-1">
                  <Input id="name" placeholder="Saisissez votre nom complet" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Label className="text-sm" htmlFor="email">
                  Email
                </Label>
                <div className="flex flex-col gap-1">
                  <Input id="email" placeholder="Votre email" required type="email" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Label className="text-sm" htmlFor="amount">
                  Montant (USD)
                </Label>
                <div className="flex flex-col gap-1">
                  <Input id="amount" placeholder="Saisissez le montant que vous souhaitez donner" required />
                </div>
              </div>
              <Button type="submit">Faire un don</Button>
            </form>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 {church && church.name}. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Confidentialité
          </Link>
        </nav>
      </footer>
    </div>
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
