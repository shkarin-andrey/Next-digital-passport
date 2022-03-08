import Image from "next/image"
import MainTabs from "../mainTabs"

import mainImg from "../../assets/main/mainImg.png"
import MainArrow from '../../assets/main/mainArrow'
import { Wrapper } from "./style"

const Main = () => {
    return (
        <Wrapper className='main'>
            <Image className='z-0' src='/bg.jpg' alt='bg' layout="fill"/>
            <div className="container grid grid-cols-12 z-10 relative">
                <div className="col-span-5">
                    <h1 className="big__title text-cs-white uppercase text-5xl mt-32">
                        Digital Passport
                    </h1>
                    <div className="divider w-3/4"></div>
                    <p className="text-2xl text-cs-white mt-6 max-w-lg">
                        Объединяем все адреса в одно место. Получите личный криптопрофиль и начните зарабатывать.
                    </p>
                    <MainTabs/>
                </div>
                <div className="main-img col-end-12 col-span-5 flex justify-end">
                    <Image src={mainImg} alt='hello'/>
                </div>
                <div className="main-arrow">
                    <MainArrow/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Main