import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;

    .card {
        position: relative;
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 0px 32px rgba(114, 18, 12, 0.25), 0px 0px 16px rgba(114, 18, 12, 0.25), 0px 0px 8px rgba(114, 18, 12, 0.25);
        backdrop-filter: blur(30px);
        border-radius: 20px;
        padding: 20px;
        text-align: center;
/* 
        &:nth-child(1) {
            &::before {
                content: '';
                position: absolute;
                top: -100px;
                right: -100px;

                width: 200px;
                height: 200px;
                background: #FC9058;
                border-radius: 100%;
                z-index: -1;
            }
        } */
    }    

`
