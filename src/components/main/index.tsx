import Image from "next/image"
import MainTabs from "../mainTabs"

import mainImg from "../../assets/main/mainImg.png"
import MainArrow from '../../assets/main/mainArrow'
import { Wrapper } from "./style"

const Main = ({aboutRef}:any) => {
    return (
        <Wrapper className='main'>
            <Image className='z-0' src='/bg.jpg' alt='Digital Passport' layout="fill"/>
            <div className="container grid grid-cols-12 z-10 relative">
                <div className="col-span-12 lg:col-span-6 xl:col-span-5">
                    <h1 className="big__title text-cs-dark-700 lg:text-cs-white uppercase text-3xl sm:text-5xl mt-20 sm:mt-32 text-center lg:text-left">
                        Digital Passport
                    </h1>
                    <div className="divider w-3/4 mx-auto lg:mx-0"></div>
                    <p className="text-xl sm:text-2xl text-cs-dark-700 lg:text-cs-white mt-6 max-w-lg mx-auto text-center lg:mx-0 lg:text-left">
                        Объединяем все адреса в одно место. Получите личный криптопрофиль и начните зарабатывать.
                    </p>
                    <MainTabs/>
                </div>
                <div className="main-img col-end-12 col-span-5 hidden lg:flex justify-end">
                    <div>
                    <Image src={mainImg} alt='Digital Passport'/>
                    </div>
                </div>
                <div className="main-arrow" onClick={() => window.scroll(0,aboutRef.current.offsetTop)}>
                    <MainArrow/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Main