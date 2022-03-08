import SectionHeader from "../sectionHeader"
import Cards from "../cards"
import cardOne from "../../assets/about/cardOne.svg"
import cardTwo from "../../assets/about/cardTwo.svg"
import cardThree from "../../assets/about/cardThree.svg"

const About = () => {
    const title = 'Почему мы?'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum eget sed ut sed aliquet nullam at. Nisi id at gravida nisl ultrices sem sagittis. Volutpat magnis tortor ornare senectus. In condimentum duis cras dui. Neque, auctor egestas tortor, sem purus, pretium, auctor molestie.'

    const titleCards = [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum'
    ]
    const descriptionCards = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida fermentum velit at. Et pellentesque tempor nisl, diam id condimentum nulla diam nibh.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida fermentum velit at. Et pellentesque tempor nisl, diam id condimentum nulla diam nibh.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida fermentum velit at. Et pellentesque tempor nisl, diam id condimentum nulla diam nibh.'
    ]
    const srcCard = [
        cardOne,
        cardTwo,
        cardThree
    ]

    return (
        <section className="about flex justify-center relative pt-28">
           <div className="container">
                <SectionHeader 
                    title={title}
                    description={description}/>   
                <Cards
                    title={titleCards}
                    description={descriptionCards}
                    src={srcCard}/>
            </div>

        </section>
    )
}

export default About
