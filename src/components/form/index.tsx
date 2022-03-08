import Image from "next/image"
import formImg from "../../assets/form/formImg.png"
import Btn from "../btn"
import Input from "../input"
import SectionHeader from "../sectionHeader"
import { Wrapper } from "./style"

const Form = () => {
    const title = 'Участвовать в ICO и AirDrop'
    const description = 'Вы можете принять участие в ICO и AirDrop. Для участия необходимо ввести данные в форму со своим именем и названием кошелька.'

    return (
        <Wrapper className="form pt-28">
            <div className="container">
                <div className="circle bg-cs-orange h-28 w-28 rounded-full absolute z-0 left-10"/>
                <div className="circle bg-cs-orange h-80 w-80 rounded-full absolute -left-16 -bottom-16 z-0"/>
                <div className="circle bg-cs-orange h-60 w-60 rounded-full absolute z-0 right-1/4 top-1/4"/>
                <div className="circle bg-cs-orange h-20 w-20 rounded-full absolute z-0 right-40 bottom-1/4"/>

                <SectionHeader title={title} description={description}/>

                <form className="flex flex-col items-center">
                    <Input text='Имя' placeholder='Введите свое имя'/>
                    <Input className='mt-7' text='Кошелек' placeholder='Введите свой кошелек'/>

                    <div className='mt-8'>
                        <Btn text='Отправить' styleStatic/>
                    </div>
                </form>

                <div className="flex justify-center">
                    <Image src={formImg} alt='Form'/>
                </div>
            </div>    
        </Wrapper>
    )
}

export default Form
