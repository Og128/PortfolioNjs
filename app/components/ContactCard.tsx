/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";



export type ContactProps = {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
    url: string,
}

export const ContactCard = (props: ContactProps) => {
    return (
        <Link href={props.url} target="_blank" className="w-full">
            <Card className="hover:bg-accent/30 transition-colors group p-3 b-accent/10 flex items-center gap-4">
                <div className="relative">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="w-10 h10 rounded-full object-contain" />
                    <img
                        src={props.mediumImage}
                        alt={props.name}
                        className=" rounded-full object-contain w-4 h-4 absolute -bottom-2 -right-2" />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-4 ">
                        <p className="text-gl font-semibold">
                            {props.name}
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {props.description}
                    </p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={16} />
            </Card>
        </Link>
    )
}