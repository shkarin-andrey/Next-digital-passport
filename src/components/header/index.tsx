import Link from 'next/link'
import Logo from '../../assets/header/logo'
import {Wrapper} from './style'
import Menu from '../menu'

const Header = () => {
    return (
        <Wrapper className="header">
            <div className="container flex items-center justify-between">
                <Link href='/'>
                    <a className="logo flex items-center gap-x-2">
                        <Logo/>
                        <span className='font-bold text-2xl text-white'>MuStreets</span>
                    </a>
                </Link>
                <Menu/>
            </div>
        </Wrapper>
    )
}

export default Header