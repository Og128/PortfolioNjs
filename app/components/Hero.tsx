/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section"
import Image from "next/image"
import imgProfile from './images/slackphoto2.jpg'
import { Code } from "./Code"

export const Hero = () => {
	return <Section className="flex max-lg:flex-col items-start gap-4">
		<div className="flex-[3] w-full flex-col gap-2">
			<h2 className="font-bold font-caption text-5xl text-primary">Olivier Gautheron</h2>
			<h3 className="text-3xl font-caption">Software developer</h3>
			<p className="text-base">
				Welcome to my portfolio ! <br />
				I am
				<Code className="inline-flex items-center gap-1">
					<img
						alt="french flag"
						src='https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
						style={{ width: 16, height: "16" }} />
					French
				</Code>
				full-stack web developer.  <br />
				Currently living in
				<Code className="inline-flex items-center gap-1">
					<img
						alt="Olivier picture"
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/langfr-1024px-Flag_of_Thailand.svg.png'
						style={{ width: 16, height: "16" }} />
					Bangkok
				</Code>
				.
			</p>
		</div>
		<div className="flex-[2] max-md:m-auto ml-auto">
			<Image src={imgProfile}
				className="w-full h-auto rounded-full max-w-xs max-md:w-56"
				alt="Olivier picture" />
		</div>
	</Section>
}