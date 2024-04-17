import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function AdminLayout(props) {

    const { church, children, active } = props;

    const activeClass = (active == "home") ? "font-bold text-gray-800 " : "font-normal text-gray-500 ";

    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="flex items-center h-16 px-4 bg-gray-100 border-b shrink-0 md:px-6">
                <Link
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    href="/admin">
                    <img
                        alt="logo"
                        className="mx-2 aspect-video overflow-hidden rounded-xl object-contain object-contain"
                        height="200"
                        src={church.logo}
                        width="200" />
                </Link>
                <nav
                    className="flex-col hidden  gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
                    <Link className={(active == "home") ? "font-bold text-gray-800 text-sm dark:text-gray-400" : " font-normal text-gray-500 text-sm dark:text-gray-400"} href="/admin">
                        Accueil
                    </Link>
                    <Link className={(active == "campaign") ? "font-bold text-gray-800 text-sm dark:text-gray-400" : " font-normal text-gray-500 text-sm dark:text-gray-400"} href="/admin/campaigns">
                        Campagnes
                    </Link>
                    {/* <Link className={(active == "signals") ? "font-bold text-gray-800 text-sm dark:text-gray-400" : " font-normal text-gray-500 text-sm dark:text-gray-400"} href="/admin/signals">
                        Signalement
                    </Link> */}
                    <Link className={(active == "cms") ? "font-bold text-gray-800 text-sm dark:text-gray-400" : " font-normal text-gray-500 text-sm dark:text-gray-400"} href="/admin/cms">
                        CMS
                    </Link>
                    <Link className={(active == "settings") ? "font-bold text-gray-800 text-sm dark:text-gray-400" : " font-normal text-gray-500 text-sm dark:text-gray-400"} href="/admin/settings">
                        Paramètres
                    </Link>
                    
                </nav>
                <div className="flex items-center hidden md:visible w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="flex-1 ml-auto sm:flex-initial">
                        <div className="relative">
                            <SearchIcon
                                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                placeholder="Search..."
                                type="search" />
                        </div>
                    </form>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <img
                            alt="Avatar"
                            className="rounded-full"
                            height="32"
                            src={"/placeholder.svg"}
                            style={{
                                aspectRatio: "32/32",
                                objectFit: "cover",
                            }}
                            width="32" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                {children}
            </main>
            <footer
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t px-4 md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 {church.name}. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        {"Conditions d'utilisation"}
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Confidentialité
                    </Link>
                </nav>
            </footer>
        </div>
    )

}

function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>)
    );
}
