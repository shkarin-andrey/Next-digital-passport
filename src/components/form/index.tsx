import Image from "next/image"
import formImg from "../../assets/form/formImg.png"
import Btn from "../btn"
import Input from "../input"
import SectionHeader from "../sectionHeader"
import { Wrapper } from "./style"
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Введите не менее двух символов')
        .max(15, 'Введите не более 15 символов')
        .required('Введите свое имя'),
    billfold: Yup.string()
        .min(10, 'Введите не менее 10 символов')
        .max(50, 'Введите не более 50 символов')
        .required('Введите свой номер кошелька')
});

const Form = () => {
    const title = 'Участвовать в ICO и AirDrop'
    const description = 'Вы можете принять участие в ICO и AirDrop. Для участия необходимо ввести данные в форму со своим именем и названием кошелька.'

    return (
        <Wrapper className="form pt-28 overflow-hidden -mb-2">
            <div className="container">
                <div className="circle bg-cs-orange h-28 w-28 rounded-full absolute z-[-1] left-0 sm:left-10" />
                <div className="circle bg-cs-orange h-44 w-44 sm:h-80 sm:w-80 rounded-full absolute -left-16 -bottom-16 z-[-1]" />
                <div className="circle bg-cs-orange h-40 w-40 sm:h-60 sm:w-60 rounded-full absolute z-[-1] -right-10 md:right-10 lg:right-28 xl:right-1/4 top-1/6" />
                <div className="circle bg-cs-orange h-20 w-20 rounded-full absolute z-[-1] right-0 lg:right-40 bottom-1/4" />

                <SectionHeader title={title} description={description} />

                <Formik
                    initialValues={{ name: '', billfold: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values, null, 2));
                    }}
                >
                    <FormikForm className="flex flex-col items-center">
                        <div className='max-w-[600px] w-full relative'>
                            <label className="absolute left-1/2 translate-x-[-50%] -top-3 bg-white px-1" htmlFor="name">Имя</label>
                            <Field
                                id='name'
                                className='w-full text-center border border-cs-orange rounded outline-none h-10'
                                type="text"
                                name="name"
                                placeholder='Введите свое имя'
                            />
                        </div>
                        <ErrorMessage className="text-sm text-red-600" name="name" component="div" />
                        <div className='max-w-[600px] w-full relative'>
                            <label className="absolute left-1/2 translate-x-[-50%] top-2 bg-white px-1" htmlFor="billfold">Кошелек</label>
                            <Field
                                id='billfold'
                                className='mt-5 w-full text-center border border-cs-orange rounded outline-none h-10'
                                type="text"
                                name="billfold"
                                placeholder='Введите свой кошелек'
                            />
                        </div>

                        <ErrorMessage className="text-sm text-red-600" name="billfold" component="div" />
                        <div className='mt-8'>
                            <Btn type="submit" text='Участвовать' styleStatic />
                        </div>
                    </FormikForm>
                </Formik>

                {/* <form className="flex flex-col items-center">
                    <Input text='Имя' placeholder='Введите свое имя' />
                    <Input className='mt-7' text='Кошелек' placeholder='Введите свой кошелек' />

                    <div className='mt-8'>
                        <Btn text='Отправить' styleStatic />
                    </div>
                </form> */}

                <div className="flex justify-center">
                    <Image src={formImg} alt='Form' />
                </div>
            </div>
        </Wrapper>
    )
}

export default Form
