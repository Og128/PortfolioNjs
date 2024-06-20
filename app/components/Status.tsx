import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { AppWindow, BookA, Home, LayoutList} from "lucide-react"
import { SideProject, SideProjectProps } from "./SideProject"
import { WorkProject, WorkProps } from "./WorkProject"
import { ContactCard } from "./ContactCard"


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 ">
                    <p className="text-lg text-muted-foreground">
                        Project, work and training
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] flex flex-col gap-4 w-full">
                <Card className="p-4 flex-1 ">
                    <p className="text-lg text-muted-foreground">
                        Works
                    </p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <WorkProject
                                key={index}
                                {...work}
                            />
                        ))}
                    </div></Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Work with me !
                    </p>
                    <ContactCard
                        name="@UpWork"
                        image='./images/slackphoto2.webp'
                        mediumImage='./images/upwork.png'
                        description="My upwork page"
                        url='https://www.upwork.com/freelancers/~01fccdf2b1b1f03219?mp_source=share' />
                    <ContactCard
                        name="Olivier Gautheron"
                        image='./images/slackphoto2.webp'
                        mediumImage='./images/malt.png'
                        description="My Malt page"
                        url='https://www.malt.fr/profile/oliviergautheron?' />
                </Card>
            </div>
        </Section>)
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: AppWindow,
        title: "David Rodriguez Studio",
        description: 'React - Framer motion',
        url: 'https://davidrodriguez.studio'
    },
    {
        Logo: LayoutList,
        title: "Task Manager",
        description: 'Laravel - React - Inertia - Tailwind',
        url: 'https://github.com/Og128/React-Laravel'
    },
    {
        Logo: BookA,
        title: "Book website",
        description: 'NodeJs - ExpressJs - MongoDB',
        url: 'https://github.com/Og128/Projet_7_NodeJs'
    },
    {
        Logo: Home,
        title: "AirBnb style website",
        description: 'React - Sass',
        url: 'https://github.com/Og128/Projet_6_ReactJs'
    },
]

const WORKS: WorkProps[] =
    [
        {
            image: './images/slackphoto2.webp',
            title: "Freelance",
            role: 'Software developer',
            date: '2023-Now',
            url: 'google.com',
            freelance: true
        },
        {
            image: './images/engin.webp',
            title: "EnginHero",
            role: 'Project manager',
            date: 'Jan.2024-May.2024',
            url: 'google.com',
            freelance: false
        },
        {
            image: './images/Somtam.png',
            title: "SomTamLabs",
            role: 'Front-end Developer',
            date: 'Nov.2023-Feb.2024',
            url: 'google.com',
            freelance: false
        }
    ]
