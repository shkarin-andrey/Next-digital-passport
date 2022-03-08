import Image from "next/image"

const Cards = ({title, description, src}:any) => {
    return (        
        <div className="cards grid grid-cols-12 gap-7">
                {title.map((titleCard:any, i:any) => {
                    return (
                        <div key={i} className="card col-span-4 p-5 flex flex-col items-center">
                            <Image src={src[i]} alt={titleCard}/>
                            <h3 className="font-bold text-lg mt-5">{titleCard}</h3>
                            <p className="font-light text-center mt-3">{description[i]}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Cards
