import Btn from '../btn'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/header/logo'

import {Wrapper} from './style'
import footerBg from '/src/assets/footer/footerBg.png'

import GooglePlay from '../../assets/googlePlay'
import Android from '../../assets/android'
import AppStore from '../../assets/appStore'

const blogs = [
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
]

const Footer = () => {
    return (
        <>
            <div className="bg w-full -mb-2">
                <Image src={footerBg} alt='hello'/>
            </div>
            <Wrapper className="footer flex justify-center">
                <div className="container">
                    <div className="grid grid-cols-4 gap-7">
                        <div>
                            <Link href='/'>
                                <a className="logo flex items-center gap-x-2">
                                    <Logo/>
                                    <span className='font-bold text-2xl'>MuStreets</span>
                                </a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus facilisi viverra blandit praesent. Faucibus eu ultrices nec augue semper dolor aliquam.
                            </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus facilisi viverra blandit praesent. Faucibus eu ultrices nec augue semper dolor aliquam.
                            </p>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            {blogs.map((title:any, i:number) => (
                                <Link key={i} href='/'>
                                    <a className="flex gap-x-5 items-center">
                                        <div className='w-1/4 h-12 bg-cs-orange'></div>
                                        <h3>
                                            {title}
                                        </h3>    
                                    </a>
                                </Link>
                            ))}
                        </div>
                        <div className='flex flex-col gap-5 items-end'>
                            <div>
                                <Btn text='Сотрудничество' styleStatic/>
                            </div>
                            <div>
                                <Btn text='Добавить предложение?' styleStatic/>
                            </div>

                            <div className="w-full flex justify-between mt-8">
                                <div className="flex flex-col gap-2 items-center cursor-pointer">
                                    <GooglePlay/>
                                    <div className='text-cs-orange'>Goolge Play</div>  
                                </div>
                                <div className="flex flex-col gap-2 items-center cursor-pointer">
                                    <Android/>
                                    <div className='text-cs-orange'>Android APK</div>  
                                </div>
                                <div className="flex flex-col gap-2 items-center cursor-pointer">
                                    <AppStore/>
                                    <div className='text-cs-orange'>App Store</div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider w-full mt-5"></div>
                    <div className='text-center py-5 '>
                        © 2022 
                        <Link href='/'>
                            <a className='ml-2 cursor-pointer text-cs-orange'> 
                                Политика конфиденциальности
                            </a>
                        </Link>
                    </div>
                </div>    
            </Wrapper>
        </>
    )
}

export default Footer
