import Link from "next/link";

export default function PublicLayout(props) {

    const { logo, name, children } = props;

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center my-3">
                <Link href="/" className="flex items-center justify-center">
                    <img
                        alt="logo"
                        className="mx-2 aspect-video overflow-hidden rounded-xl object-contain object-contain"
                        height="180"
                        src={logo}
                        width="180" />

                    <span className="sr-only">{name}</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/">
                        Accueil
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/campaigns">
                        Donations
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#">
                        Rendez-vous
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/books">
                        Librairie
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <footer
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t px-4 md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 {name}. All rights reserved.</p>
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