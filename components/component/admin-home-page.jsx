import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function AdminHomePage() {
  return (
      <>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="outline">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-xl">Campaigns</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button size="icon" variant="outline">
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button size="icon" variant="outline">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        <Card className="p-4 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-semibold">Campaign</div>
              <div className="text-2xl font-bold">Disaster Relief Fund</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-semibold">Goal</div>
              <div className="text-2xl font-bold">$100,000</div>
            </div>
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Donations</CardTitle>
            <div className="flex items-center gap-2 ml-auto shrink-0">
              <Button size="sm">Send reminder</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Donor</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Sophia Anderson</TableCell>
                  <TableCell className="text-right">$50.00</TableCell>
                  <TableCell className="text-right">Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Alexander Johnson</TableCell>
                  <TableCell className="text-right">$25.00</TableCell>
                  <TableCell className="text-right">Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Emma Garcia</TableCell>
                  <TableCell className="text-right">$100.00</TableCell>
                  <TableCell className="text-right">Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ava Wilson</TableCell>
                  <TableCell className="text-right">$75.00</TableCell>
                  <TableCell className="text-right">Pending</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Noah Martinez</TableCell>
                  <TableCell className="text-right">$200.00</TableCell>
                  <TableCell className="text-right">Paid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </>
      )
  ;
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>)
  );
}


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>)
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


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
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
