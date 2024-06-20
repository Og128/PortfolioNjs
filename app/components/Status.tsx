import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { AppWindow, BookA, Home, LayoutList} from "lucide-react"
import imgProfile from './images/slackphoto2.jpg'
import imgUpwork from './images/upwork.png'
import imgMalt from './images/malt.png'
import imgSom from './images/Somtam.png'
import imgEngin from './images/engin.webp'
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
                        image={imgProfile}
                        mediumImage={imgUpwork}
                        description="My upwork page"
                        url='https://www.upwork.com/freelancers/~01fccdf2b1b1f03219?mp_source=share' />
                    <ContactCard
                        name="Olivier Gautheron"
                        image={imgProfile}
                        mediumImage={imgMalt}
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
        description: 'Explore his captivating artworks and exhibition',
        url: 'https://davidrodriguez.studio'
    },
    {
        Logo: LayoutList,
        title: "Task Manager",
        description: 'Application to learn Laravel with React',
        url: 'https://github.com/Og128/React-Laravel'
    },
    {
        Logo: BookA,
        title: "Book website",
        description: 'Student project to learn back-end development',
        url: 'https://github.com/Og128/Projet_7_NodeJs'
    },
    {
        Logo: Home,
        title: "AirBnb style website",
        description: 'Student project to learn Reactjs and Sass',
        url: 'https://github.com/Og128/Projet_6_ReactJs'
    },
]

const WORKS: WorkProps[] =
    [
        {
            image: imgProfile,
            title: "Freelance",
            role: 'Software developer',
            date: '2023-Now',
            url: 'google.com',
            freelance: true
        },
        {
            image: imgEngin,
            title: "EnginHero",
            role: 'Project manager',
            date: 'Jan.2024-May.2024',
            url: 'google.com',
            freelance: false
        },
        {
            image: imgSom,
            title: "SomTamLabs",
            role: 'Front-end Developer',
            date: 'Nov.2023-Feb.2024',
            url: 'google.com',
            freelance: false
        }
    ]
