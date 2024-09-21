/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section"
import { Code } from "./Code"

export const Hero = () => {
	return <Section className="flex max-lg:flex-col items-start gap-4">
		<div className="flex-[3] w-full flex-col">
			<h2 className="font-bold font-caption text-5xl text-primary">Olivier Gautheron</h2>
			<h3 className="text-3xl font-caption mt-6">Développeur FullStack</h3>
			<p className="text-base mt-6">
				Bienvenue sur mon Portfolio !</p>
			<p className="text-base mt-3">
				Je suis développeur full-stack 
				<Code className="inline-flex items-center gap-1">
					<img
						alt="french flag"
						src='https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
						style={{ width: 16, height: "16" }} />
					Français
				</Code>
				</p>
			<p className="text-base mt-1">
				Basé à
				<Code className="inline-flex items-center gap-1">
					<img
						alt="Olivier picture"
						src='https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Provence_Alpes_Cote_d_Azur.png'
						style={{ width: 16, height: "16" }} />
					Tavernes
				</Code>
				.
			</p>
			<p className="text-base mt-1">
			Désireux de saisir des opportunités en tant que freelance,<br /> tout en me lançant dans une carrière à plein temps.
			</p>
		</div>
		<div className="flex-[2] max-md:m-auto ml-auto">
			<img src='./images/slackphoto2.webp'
				className="w-full h-auto rounded-full max-w-xs max-md:w-56"
				alt="Olivier picture" />
		</div>
	</Section>
}