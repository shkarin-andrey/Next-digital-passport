import {Wrapper} from './style'

const Menu = () => {
    const menu = [
        'Установить',
        'Проверить аккаунт',
        'Blog',
        'Документация'
    ]

    return (
        <Wrapper>
            <ul className='menu flex gap-x-10'>
                {menu.map((title) => {
                    return (
                        <li key={title}>
                            <a 
                                href="#" 
                                className='text-white hover:text-cs-red'
                            >
                                {title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

export default Menu
