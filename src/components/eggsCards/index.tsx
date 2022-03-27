import {Wrapper} from './style'

const obj = [
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed?',
        count: '55'
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed?',
        count: '55'
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed?',
        count: '55'
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sed?',
        count: '55'
    }
]

const EggsCards = () => {
    return (
        <Wrapper className="eggs_cards hidden lg:flex justify-center pt-28">
            <div className="container grid grid-cols-4 gap-8">
                {obj.map((card:any, i:number) => {
                    return (
                        <div key={i} className="eggs_card bg-cs-blue px-5 py-20 text-center text-white rounded-3xl">
                            <h3 className="font-bold text-2xl">{card.title}</h3>    
                            <div className="text-8xl text-cs-orange font-bold mt-5 mb-5">{card.count}</div>
                            <p>{card.description}</p>
                        </div>
                    )
                })}
            </div>    
        </Wrapper>
    )
}

export default EggsCards
