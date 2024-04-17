"use client"
import { useState } from "react";
import churches from "@/data/churches.json"
import defaultCampaings from "@/data/campaigns.json"
import defaultDonations from "@/data/donations.json"
import defaultDonors from "@/data/donors.json"
import AdminLayout from "@/components/layout/admin";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DashboardHomePage } from "@/components/component/dashboard-home-page";
import { Progress } from "@/components/ui/progress";


export default function AdminCampaign(props) {
    const [church, setChurch] = useState(null);
    const [campaign, setCampaign] = useState(null)
    const [donations, setDonations] = useState([])
    const [donors, setDonors] = useState([])
    const { id } = props.params;
    setTimeout(function () {
        const resultChurch = churches[0]
        setChurch(resultChurch)

        const ourCampaings = defaultCampaings.filter(camp => camp.campaignId == id)
        setCampaign(ourCampaings[0]);

        const ourDonations = defaultDonations.filter(donation => donation.campaignId == id);
        setDonations(ourDonations);

        setDonors(defaultDonors);

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
            <div className="flex items-center gap-4">
                <Link href={"/admin/campaigns"} >
                    <Button size="icon" variant="outline">
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Button>
                </Link>

                <h1 className="font-medium text-gray-500 text-lg md:text-xl">Campagnes {"-"}  <span className="text-gray-800 font-bold">{campaign.name}</span></h1>
                {/* <div className="ml-auto flex items-center gap-2">
                    <Button size="icon" variant="outline">
                        <ChevronLeftIcon className="h-4 w-4" />
                        <span className="sr-only">Previous</span>
                    </Button>
                    <Button size="icon" variant="outline">
                        <ChevronRightIcon className="h-4 w-4" />
                        <span className="sr-only">Next</span>
                    </Button>
                </div> */}
            </div>
            <Card className="p-4 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-1">
                        <div className="text-sm text-gray-500 font-semibold">INFOS</div>
                        <div className="text-2xl text-gray-700 font-bold">{campaign.name}</div>
                        <img
                            alt="Cover"
                            className="aspect-video w-full rounded-xl overflow-hidden object-contain object-contain"
                            height="300"
                            src={campaign.photo}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <div className="text-sm  text-gray-500 font-semibold">OBJECTIF</div>
                                <div className="text-2xl text-blue-600 font-bold">{campaign.currencySign} {campaign.amount} </div>
                            </div>
                            <div>
                                <div className="text-sm  text-gray-500 font-semibold">MONTANT ATTEINT</div>
                                <div className="text-2xl text-gray-700 font-bold">{campaign.currencySign} {campaign.current} </div>
                            </div>
                        </div>
                        <div className="my-4" >
                            <Progress className="flex-1 h-2" value={Math.round((campaign.current / campaign.amount) * 100)} />
                        </div>
                        <div className="text-sm text-gray-500 text-justify font-normal">{campaign.description}</div>
                        <div className="text-sm  text-gray-500 font-semibold mt-3">DONATEURS</div>
                        <div className="text-2xl text-gray-700 font-bold">{donations.length} </div>
                    </div>
                </div>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Dons</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-left">Partenaire</TableHead>
                                <TableHead className="text-right">Montant</TableHead>
                                <TableHead className="text-right">Mode de paiement</TableHead>
                                <TableHead className="text-right">Pays</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {donations && donations.map((donation, index) => (<TableRow key={donation.donationId + index} >
                                <TableCell className="font-medium text-left">{donation.firstName} {donation.lastName}</TableCell>
                                <TableCell className="text-right">{donation.currencySign} {donation.amount}</TableCell>
                                <TableCell className="text-right">{donation.paymentMode}</TableCell>
                                <TableCell className="text-right">{donation.country}</TableCell>
                                <TableCell className="text-right">
                                    <Badge variant={donation.status}>
                                        {donation.statusLabel}
                                    </Badge>
                                </TableCell>
                            </TableRow>))
                            }
                        </TableBody>
                    </Table>
                    <div className="ml-auto flex items-center gap-2">
                        <Button size="icon" variant="outline">
                            <ChevronLeftIcon className="h-4 w-4" />
                            <span className="sr-only">Previous</span>
                        </Button>
                        <p className="tracking-wider" >1 2 3 4 5 7</p>
                        <Button size="icon" variant="outline">
                            <ChevronRightIcon className="h-4 w-4" />
                            <span className="sr-only">Next</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader style={{ "justifyContent": "space-between" }} className="my-3 flex flex-row items-center space-x-10" >
                    <CardTitle>Donateurs</CardTitle>
                    <div style={{marginRight: "2rem"}} className="max-w-[8rem] mr-5">
                        <Button>
                            Envoyer un rappel
                        </Button>
                    </div>

                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-left">Nom</TableHead>
                                <TableHead className="text-right">Montant</TableHead>
                                <TableHead className="text-right">Pays</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {donors && donors.map((donation, index) => (<TableRow key={donation.donationId + index} >
                                <TableCell className="font-medium text-left">{donation.firstName} {donation.lastName}</TableCell>
                                <TableCell className="text-right">{donation.currencySign} {donation.amount}</TableCell>
                                <TableCell className="text-right">{donation.country}</TableCell>
                                <TableCell className="text-right">
                                    <Badge variant={donation.status}>
                                        {donation.statusLabel}
                                    </Badge>
                                </TableCell>
                            </TableRow>))
                            }
                        </TableBody>
                    </Table>
                    <div className="ml-auto flex items-center gap-2">
                        <Button size="icon" variant="outline">
                            <ChevronLeftIcon className="h-4 w-4" />
                            <span className="sr-only">Previous</span>
                        </Button>
                        <p className="tracking-wider" >1 2 3 4 5 7</p>
                        <Button size="icon" variant="outline">
                            <ChevronRightIcon className="h-4 w-4" />
                            <span className="sr-only">Next</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </AdminLayout>
    );
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