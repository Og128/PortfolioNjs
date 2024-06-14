import { Badge } from '@/components/ui/badge'
import { Section } from './Section'
import { ContactCard } from './ContactCard'
import imgProfile from './images/slackphoto2.jpg'
import imgTwitter from './images/twitter_image.jpg'
import imgLinked from './images/linked_image.png'
import imgMail from './images/mail_image.webp'

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
                    description="Profil linkedIn"
                    url='https://www.linkedin.com/in/olivier-gautheron-og/' />
                <ContactCard
                    name="@Gmail"
                    image={imgProfile}
                    mediumImage={imgMail}
                    description="gautheron.og@gmail.com"
                    url='mailto:gautheron.og@gmail.com' />
            </div>

        </Section>
    )
}
