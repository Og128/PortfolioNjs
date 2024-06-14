import Image, { StaticImageData }  from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"


export type WorkProps = {
    image: StaticImageData | string,
    title: string,
    role: string,
    date: string,
    url: string,
    freelance?: boolean
}

export const WorkProject = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <Image
                src={props.image}
                alt={props.title}
                className="w-10 h-10 object-contain rounded-md" />
            <div className="mr-auto w-full">
                <div className="flex items-center gap-4 ">
                    <p className="text-gl font-semibold">
                        {props.title}
                    </p>
                    {props.freelance && <Badge variant='outline'>Mission</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">
                    {props.role}
                </p>
                <p className="text-xs text-end text-muted-foreground">
                    {props.date}
                </p>
            </div>
        </Link>)
}