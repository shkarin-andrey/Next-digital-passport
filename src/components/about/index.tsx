import SectionHeader from "../sectionHeader"
import Cards from "../cards"
import { title, description, titleCards, descriptionCards, srcCard } from "./config"

const About = ({aboutRef}:any) => {
    return (
        <section ref={aboutRef} className="about flex justify-center relative pt-28">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description} />
                <Cards
                    title={titleCards}
                    description={descriptionCards}
                    src={srcCard} />
            </div>

        </section>
    )
}

export default About
