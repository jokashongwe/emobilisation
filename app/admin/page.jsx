"use client"
import { HomePage } from "@/components/component/home-page";
import Image from "next/image";
import { useState } from "react";
import churches from "@/data/churches.json"
import defaultCampaings from "@/data/campaigns.json"
import { DashboardHomePage } from "@/components/component/dashboard-home-page";
import { AdminHomePage } from "@/components/component/admin-home-page";
import AdminLayout from "@/components/layout/admin";
import { CampaingListPage } from "@/components/component/campaing-list-page";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import { ResponsiveLine } from "@nivo/line";

export default function AdminHome() {
  const [church, setChurch] = useState(null);
  const [campaigns, setCampaings] = useState(null)

  setTimeout(function () {
    const resultChurch = churches[0]
    setChurch(resultChurch)

    const ourCampaings = defaultCampaings.filter(camp => camp.churchId == resultChurch.churchId)
    setCampaings(ourCampaings);

  }, 2000);

  const RenderLoading = () => {
    return (
      <div className="flex flex-col min-h-[100dvh] items-center justify-center">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Chargements...</span>
      </div>

    )
  }

  if (!church) {
    return RenderLoading();
  }

  return (
    <AdminLayout active={"home"} church={church}>
      <div className="grid grid-cols-3 gap-2">
        <Card>
          <div className="flex flex-col py-3 gap-6 md:flex-row md:items-center md:gap-0">
            <CardContent className="grid gap-1">
              <CardTitle className="text-lg text-gray-400">Donations</CardTitle>
              <p className="text-3xl font-bold text-blue-500">$25,000</p>
            </CardContent>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col py-3 gap-6 md:flex-row md:items-center md:gap-0">
            <CardContent className="grid gap-1">
              <CardTitle className="text-lg text-gray-400">Partenaires</CardTitle>
              <p className="text-3xl font-bold text-blue-500">123</p>
            </CardContent>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col py-3 gap-6 md:flex-row md:items-center md:gap-0">
            <CardContent className="grid gap-1">
              <CardTitle className="text-lg text-gray-400">Signalement</CardTitle>
              <p className="text-3xl font-bold text-blue-500">580</p>
            </CardContent>
          </div>
        </Card>
      </div>
      <Card className="p-3" >
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-lg"> Donation récentes </CardTitle>
        </CardContent>
        <div
          className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-900">
                <TableHead className="font-semibold">Nom</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Mode de paiement</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y">
              <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-900">
                <TableCell className="font-semibold">John Doe</TableCell>
                <TableCell>$50</TableCell>
                <TableCell>Visa</TableCell>
                <TableCell>2 hours ago</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-900">
                <TableCell className="font-semibold">Jane Smith</TableCell>
                <TableCell>$25</TableCell>
                <TableCell>Mastercard</TableCell>
                <TableCell>4 hours ago</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-900">
                <TableCell className="font-semibold">Chris Johnson</TableCell>
                <TableCell>$100</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell>6 hours ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
      <Card className="py-4 px-2">
        <CardContent className="flex flex-col gap-2 border-b">
          <CardTitle className="text-base text-lg">Donations Mensuel</CardTitle>
        </CardContent>
        <div className="h-[200px]">
          <LineChart mmoney={[
            { x: "Jan", y: 43 },
            { x: "Feb", y: 137 },
            { x: "Mar", y: 61 },
            { x: "Apr", y: 145 },
            { x: "May", y: 26 },
            { x: "Jun", y: 154 },
          ]} bank={[
            { x: "Jan", y: 70 },
            { x: "Feb", y: 38 },
            { x: "Mar", y: 130 },
            { x: "Apr", y: 14 },
            { x: "May", y: 80 },
            { x: "Jun", y: 100 },
          ]} className="h-[200px]" />
        </div>
      </Card>
    </AdminLayout>
  );
}

function LineChart(props) {
  const { mmoney, bank } = props;
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Mobile Money",
            data: mmoney,
          },
          {
            id: "Card",
            data: bank,
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}