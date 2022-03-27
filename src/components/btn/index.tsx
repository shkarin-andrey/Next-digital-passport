interface iBtn {
    text: string;
    styleStatic?: boolean;
    type?: any;
}

const Btn = ({text, styleStatic, type}:iBtn) => {
    return (
        <button type={type || 'button'} className={`btn ${!styleStatic ? 'btn-white' : ''}`}>
            {text}
        </button>
    )
}

export default Btn
