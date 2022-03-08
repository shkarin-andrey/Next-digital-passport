interface iInput {
    type?: string;
    text: string;
    placeholder?: string;
    className?: string;
}

const Input = ({type, text, placeholder, className}: iInput) => {
    return (
        <div className={`relative max-w-xl w-full ${className}`}>
            <label 
                className="label bg-white px-2 absolute" 
                htmlFor='formName'>{text}</label>
            <input 
                className="text-center border-cs-orange outline-none border tounded h-10 w-full" 
                type={type || 'text'} 
                id="formName" 
                placeholder={placeholder}/>    
        </div>
    )
}

export default Input
