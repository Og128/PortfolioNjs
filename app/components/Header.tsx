import React from 'react'
import { Section } from './Section'
import { buttonVariants } from '@/components/ui/button'
import Githubicon from './icons/Githubicon'
import WhatsIcon from './icons/WhatsIcon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Linkedicon from './icons/LinkedIn'

export const Header = () => {
	return (
		<header className='sticky top-0 py-4 bg-background'>
			<Section className="flex items-baseline">
				<h1 className='text-lg font-bold text-primary'>OlivierGautheron.com</h1>
				<div className="flex-1"></div>
				<ul className='flex items-center gap-2'>
					<Link
						href='https://github.com/og128'
						className={cn(buttonVariants({ variant: 'outline' }), "size-6 p-0")}>
						<Githubicon size={12} className='text-foreground' />
					</Link>
					<Link
						href='https://wa.me/+33623306587'
						className={cn(buttonVariants({ variant: 'outline' }), "size-6 p-0")}>
						<WhatsIcon size={12} className='text-foreground' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/olivier-gautheron-og/'
						className={cn(buttonVariants({ variant: 'outline' }), "size-6 p-0")}>
						<Linkedicon size={12} className='text-foreground' />
					</Link>
				</ul>
			</Section>
		</header>
	)
}
