import Link from 'next/link'
import { Wrapper } from './style'
import { menu } from './config'
import { useState } from 'react';

const Menu = () => {
    const [active, setActive] = useState(false)

    return (
        <Wrapper>
            <div onClick={() => setActive(!active)} className={`hamburger ${active ? 'active' : ''} flex lg:hidden`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={active ? 'active' : ''}>
                <ul className={`menu ${active ? 'active' : ''} flex gap-x-10`}>
                    {menu.map(({ title, link }) => {
                        return (
                            <li key={title}>
                                <Link href={link}>
                                    <a className='text-xl lg:text-base text-white drop-shadow-[0_0_2px_rgb(0,0,0)] hover:text-cs-red hover:drop-shadow-none' >
                                        {title}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Menu
