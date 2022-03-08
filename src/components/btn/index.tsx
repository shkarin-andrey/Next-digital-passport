interface iBtn {
    text: string;
    styleStatic?: boolean;
}

const Btn = ({text, styleStatic}:iBtn) => {
    return (
        <button className={`btn ${!styleStatic ? 'btn-white' : ''}`}>
            {text}
        </button>
    )
}

export default Btn
