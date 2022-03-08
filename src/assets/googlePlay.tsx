interface iGooglePlay {
    fill?: string;
}

const GooglePlay = ({fill}:iGooglePlay) => {
    return (
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7789 13.5L19.9789 9L3.67892 0.2C3.57892 0.1 3.37892 0.1 3.07892 0L15.7789 13.5Z" fill={fill || 'white'} />
            <path d="M21.7789 20L27.6789 16.8C28.3789 16.4 28.7789 15.8 28.7789 15C28.7789 14.2 28.3789 13.5 27.6789 13.2L21.7789 10L17.0789 15L21.7789 20Z" fill={fill || 'white'} />
            <path d="M1.17884 0.899902C0.878839 1.1999 0.778839 1.5999 0.778839 1.9999V27.9999C0.778839 28.3999 0.878839 28.7999 1.17884 29.1999L14.3788 14.9999L1.17884 0.899902Z" fill={fill || 'white'} />
            <path d="M15.7789 16.5L3.07892 30C3.27892 30 3.47892 29.9 3.67892 29.8L19.9789 21L15.7789 16.5Z" fill={fill || 'white'} />
        </svg>
    )
}

export default GooglePlay
