
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import PublicLayout from "../layout/public"

export function BookstorePage({ church, books, themes }) {
  return (
    <PublicLayout logo={church.logo} name={church.name} >
      <div className="grid lg:grid-cols-[200px_1fr]">
        <div className="p-4 bg-gray-100 lg:grid-cols-1 flex flex-col gap-4">
          <div className="grid gap-2">
            <Link
              className="flex items-center gap-4 text-md font-semibold hover:underline"
              href="#all">
              Thématiques
            </Link>
            {themes && themes.map(theme => (
              <Link key={theme.code} className="flex items-center gap-4 text-sm hover:underline" href={"#" + theme.code.toLowerCase()}>
                {theme.name}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="bg-gray-100 lg:bg-white p-4 lg:grid-cols-1 flex flex-col gap-4">
          <div className="grid md:grid-cols-3 gap-4">
            {books && books.map((book, index) => (
              <Card key={"book" + index} className="grid overflow-hidden">
                <Link href="#">
                  <CardHeader className="p-0" >
                    <img
                      alt="Cover"
                      className="aspect-[2/1] w-full  object-cover m-0"
                      height="200"
                      src={book.cover}
                      width="400" />
                  </CardHeader>
                </Link>
                <CardContent className="flex flex-col mt-2">
                  <Link className="font-semibold text-xl hover:underline" href="#">
                    {book.name}
                  </Link>
                  <CardDescription>
                    {book.short}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Ajouter au panier</Button>
                  <div className="ml-auto font-semibold">{book.currencySign} {book.price}</div>
                </CardFooter>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>)
  );
}


function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>)
  );
}


function CoffeeIcon(props) {
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
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>)
  );
}


function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>)
  );
}


function ShoppingBagIcon(props) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>)
  );
}


function StarIcon(props) {
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
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
