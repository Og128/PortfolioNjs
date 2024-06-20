import { Badge } from '@/components/ui/badge'
import { Section } from './Section'
import { ContactCard } from './ContactCard'

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
                    image='./images/slackphoto2.webp'
                    mediumImage='./images/linked_image.png'
                    description="Connect with me"
                    url='https://www.linkedin.com/in/olivier-gautheron-og/' />
                <ContactCard
                    name="@Mail"
                    image='./images/slackphoto2.webp'
                    mediumImage='./images/mail_image.webp'
                    description="Email me your work offer !"
                    url='mailto:gautheron.og@gmail.com' />
                <ContactCard
                    name="@Whatsapp"
                    image='./images/slackphoto2.webp'
                    mediumImage='./images/whats.jpg'
                    description="Always available"
                    url='https://wa.me/+33623306587' />
            </div>

        </Section>
    )
}
