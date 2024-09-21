import { Badge } from '@/components/ui/badge'
import { Section } from './Section'
import ReactIcon from './icons/React'
import { Code } from './Code'
import NextIcon from './icons/Nextjs'
import TailwindIcon from './icons/Tailwindcss'

export const Skills = () => {
    return (
        <Section className='flex flex-col gap-4 items-start'>
            <Badge variant={'outline'}>Compétences</Badge>
            <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Ce que je fais
            </h2>
            <div className='flex max-md:flex-col gap-4'>
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon size={42} className='animate-spin' style={{ animationDuration: '8s' }} />
                    <h3 className="text-2xl font-semibold tracking-tight">ReactJs</h3>
                    <p className=" text-sm text-muted-foreground">
                        Mon framework principal est <Code className='inline-flex items-center gap-1'> <ReactIcon size={12} />React</Code>,
                        la plupart de mon travail est sur ce framework.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <NextIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">NextJs</h3>
                    <p className="text-sm text-muted-foreground">
                        Ce site web a été créé avec <Code className='inline-flex items-center gap-1'><NextIcon size={12} />NextJs</Code>
                        et <Code className='inline-flex items-center gap-1'><TailwindIcon size={12} />Tailwindcss</Code>
                    </p>
                </div>
            </div>

        </Section>
    )
}
