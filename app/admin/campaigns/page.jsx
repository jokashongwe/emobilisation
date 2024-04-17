"use client"
import { useState } from "react";
import churches from "@/data/churches.json"
import defCampaings from "@/data/campaigns.json"
import AdminLayout from "@/components/layout/admin";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";


export default function AdminCampaign() {
    const [church, setChurch] = useState(null);
    const [campaings, setCampaigns] = useState(null)

    setTimeout(function () {
        const resultChurch = churches[0]
        setChurch(resultChurch)

        //const ourCampaings = defaultCampaings.filter(camp => camp.churchId == resultChurch.churchId)
        setCampaigns(defCampaings);

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
        <AdminLayout active={"campaign"} church={church}>

            <Card className="p-3" >
                <CardContent className="flex flex-col gap-2 py-4 px-1">
                    <CardTitle className="text-xl"> Mes Campagnes </CardTitle>
                </CardContent>
                <div
                    className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                <TableHead className="font-semibold">Nom</TableHead>
                                <TableHead>Objectif</TableHead>
                                <TableHead>Montant Actuel</TableHead>
                                <TableHead>Avancement</TableHead>
                                <TableHead>Catégorie</TableHead>
                                <TableHead>Date de début</TableHead>
                                <TableHead>Date de Fin</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y">
                            {campaings && campaings.map(content => (
                                <TableRow key={content.campaignId} className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                    <TableCell className="font-semibold">{content.name}</TableCell>
                                    <TableCell>{content.amount} {content.currencySign}</TableCell>
                                    <TableCell>{content.current} {content.currencySign}</TableCell>
                                    <TableCell>{Math.round((content.current / content.amount * 100))}%</TableCell>
                                    <TableCell>
                                        <Badge variant={"secondary"} >
                                            {content.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{content.startDate}</TableCell>
                                    <TableCell>{content.endDate}</TableCell>
                                    <TableCell>
                                        <Link href={"/admin/campaigns/" + content.campaignId} >
                                            <Button variant="outline">
                                                Voir
                                            </Button>
                                        </Link>
                                        <Link className="mx-2" href={"/admin/campaigns/" + content.campaignId} >
                                            <Button variant="outline">
                                                Modifier
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>

        </AdminLayout>
    );
}