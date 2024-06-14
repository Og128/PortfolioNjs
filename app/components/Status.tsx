import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Carrot, Code, Square } from "lucide-react"
import imgProfile from './images/slackphoto2.jpg'
import imgTwitter from './images/twitter_image.jpg'
import imgLinked from './images/linked_image.png'
import { SideProject, SideProjectProps } from "./SideProject"
import { WorkProject, WorkProps } from "./WorkProject"
import { ContactCard } from "./ContactCard"


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 ">
                    <p className="text-lg text-muted-foreground">
                        Side, fun projects.
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url='/'
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
                        Contact me
                    </p>
                    <ContactCard
                        name="@og128"
                        image={imgProfile}
                        mediumImage={imgTwitter}
                        description="C'est moi !"
                        url='https://x.com/og128' />
                    <ContactCard
                        name="Olivier Gautheron"
                        image={imgProfile}
                        mediumImage={imgLinked}
                        description="C'est moi !"
                        url='https://www.linkedin.com/in/olivier-gautheron-og/' />
                </Card>
            </div>
        </Section>)
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Bonjour dans le monde des douzes",
        description: 'Il était une fois, douze oeuf.',
        url: 'google.com'
    },
    {
        Logo: Carrot,
        title: "Bonsoir",
        description: 'Test 2',
        url: 'google.com'
    },
    {
        Logo: Carrot,
        title: "Bonsoir",
        description: 'Test 2',
        url: 'google.com'
    },
    {
        Logo: Carrot,
        title: "Bonsoir",
        description: 'Test 2',
        url: 'google.com'
    },
    {
        Logo: Square,
        title: 'Bonne nuit',
        description: 'Test 3',
        url: 'google.com'
    }
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
            image: imgProfile,
            title: "EnginHero",
            role: 'Project manager',
            date: 'Jan.2024-May.2024',
            url: 'google.com',
            freelance: false
        },
        {
            image: imgProfile,
            title: "SomTamLabs",
            role: 'Front-end Developer',
            date: 'Nov.2023-Feb.2024',
            url: 'google.com',
            freelance: false
        }
    ]
