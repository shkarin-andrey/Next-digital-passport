import { useState } from 'react'
import Btn from "../btn"

import {Wrapper} from './style'

const MainTabs = () => {
    const [active, setActive] = useState(0)
    const headerTabs = [
        'Физ. лица',
        'Блогеры',
        'Трейдеры',
        'Организации'
    ]

    const contentTabs = [
        '1 Lipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut.',
        '2 Lipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut.',
        '3 Lipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut.',
        '4 Lipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa rhoncus ut ut.',
    ]

    return (
        <Wrapper className='main__info bg-cs-white rounded-lg mt-14'>
            <ul className="tabs border-b-2 border-cs-orange flex justify-between">
                {headerTabs.map((title, i) => {
                    return (
                        <li 
                            key={i} 
                            className={`font-bold w-1/4 pb-2 pt-5 text-center cursor-pointer ${active === i ? 'active' : ''}`}
                            onClick={() => setActive(i)}>
                            <span>{title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="main__info-content p-5">
                {contentTabs.map((content, i) => (
                    <p 
                        key={i} 
                        className={active === i ? 'active' : ''}
                    >{content}</p>
                ))}

                <div className="flex w-full justify-end mt-5">
                    <Btn text='Ознакомиться' styleStatic={false}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default MainTabs
