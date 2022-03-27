import styled from "styled-components"

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    min-height: 650px;

    span {
        height: 120vh !important;
    }

    
    .main-img {
        span {
            height: inherit !important;
        }
    }

    .main-arrow {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        animation: arrowPulse 2s linear infinite;
    }

    @keyframes arrowPulse {
        from {
            transform: translateX(-50%) translateY(0);
        }

        20% {
            transform: translateX(-50%) translateY(15px);
        }

        to {
            transform: translateX(-50%) translateY(0);
        }
    }
`
