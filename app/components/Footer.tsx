import { Section } from "./Section"

export const Footer = () => {
    return (
        <footer className="bg-card flex items-center">
            <Section className="py-8">
                <p className="text-muted-foreground text-sm"> @Copywrite 2024 Olivier Gautheron</p>
            </Section>
        </footer>
    )
}

export default Footer