import styled from "styled-components"

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;

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

    /* .btn {
        background: transparent;
        border: 1px solid #72120C;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: #72120C; 
        font-weight: 700;
        padding: 10px 30px;
        font-size: 16px;
    } */

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
