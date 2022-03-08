import SectionHeader from "../sectionHeader"
import {Wrapper} from './style'

import GooglePlay from "../../assets/googlePlay"
import Android from "../../assets/android"
import AppStore from "../../assets/appStore"
import Image from "next/image"
import commonApp from '../../assets/commonApp/commonApp.png'
import qr from "../../assets/commonApp/qr.png"

const CommonApp = () => {
    const title = 'Наше приложение'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum eget sed ut sed aliquet nullam at. Nisi id at gravida nisl ultrices sem sagittis. Volutpat magnis tortor ornare senectus. In condimentum duis cras dui. Neque, auctor egestas tortor, sem purus, pretium, auctor molestie.'

    return (
        <Wrapper className="common_app flex justify-center pt-28">
            <div className="container">
                <SectionHeader 
                    title={title}
                    description={description}/>
                <div className="grid grid-cols-12 gap-8 items-center -mt-20">
                    <div className="col-span-5">
                        <Image src={commonApp} alt={title}/>
                    </div>
                    <div className="col-span-6 col-end-12 flex flex-col gap-10">
                        <div className="card flex flex-col items-center gap-5">
                            <p>
                                Вся мощь криптовалютной биржи Binance в одном удобном приложении. <span className="text-cs-orange font-bold">Загрузите</span> мобильное приложение Binance для криптотрейдинга <span className="text-cs-orange font-bold">уже сегодня</span>.
                            </p>

                            <p>Скачать приложение возможно через:</p>

                            <div className="w-full flex justify-center gap-10">
                                <div className="flex flex-col gap-2 items-center cursor-pointer">
                                    <GooglePlay fill='black'/>
                                    <div className='text-cs-black'>Goolge Play</div>  
                                </div>
                                <div className="flex flex-col gap-2 items-center cursor-pointer">
                                    <Android fill='black'/>
                                    <div className='text-cs-black'>Android APK</div>  
                                </div>
                                <div className="flex flex-col gap-2 items-center cursor-pointer">
                                    <AppStore fill='black'/>
                                    <div className='text-cs-black'>App Store</div>  
                                </div>
                            </div>
                            <Image src={qr} alt={title}/>
                        </div>
                        
                        <div className="card flex flex-col items-center gap-5">
                            <p>
                                API Binance разработан для того, чтобы обеспечить <span className="text-cs-orange font-bold">простой и эффективный</span> способ интеграции вашего торгового приложения в нашу платформу.
                            </p>
                        </div>

                        <div className="card flex flex-col items-center gap-5">
                            <p>
                                <span className="text-cs-orange font-bold">Приглвсите</span> друзей. <span className="text-cs-orange font-bold">Зарабатывайте</span> криптовалюту вместе! Получите <span className="text-cs-orange font-bold">до 40%</span> комиссии за каждую сделку <span className="text-cs-orange font-bold">на Binance Spot, Futures и Pool</span>.
                            </p>

                            <p className="font-bold text-cs-red">Правила реферальной программы</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CommonApp
