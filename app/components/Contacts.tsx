import { Badge } from '@/components/ui/badge'
import { Section } from './Section'
import { ContactCard } from './ContactCard'
import imgProfile from './images/slackphoto2.jpg'
import imgLinked from './images/linked_image.png'
import imgMail from './images/mail_image.webp'
import imgWhats from './images/whats.jpg'

export const Contacts = () => {
    return (
        <Section className='flex flex-col gap-4 items-start'>
            <Badge variant={'outline'}>Contacts</Badge>
            <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                You can contact me here !
            </h2>
            <div className='flex max-md:flex-col gap-4 w-full'>
                <ContactCard
                    name="@LinkedIn"
                    image={imgProfile}
                    mediumImage={imgLinked}
                    description="Connect with me"
                    url='https://www.linkedin.com/in/olivier-gautheron-og/' />
                <ContactCard
                    name="@Mail"
                    image={imgProfile}
                    mediumImage={imgMail}
                    description="Email me your work offer !"
                    url='mailto:gautheron.og@gmail.com' />
                <ContactCard
                    name="@Whatsapp"
                    image={imgProfile}
                    mediumImage={imgWhats}
                    description="Always available"
                    url='https://wa.me/+33623306587' />
            </div>

        </Section>
    )
}
