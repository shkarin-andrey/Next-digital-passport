import styled from "styled-components";

export const Wrapper = styled.div`
    .eggs_card {
        border-radius: 25%;
        position: relative;
        &:nth-child(even) {
            &::before {
                content: '';
                position: absolute;
                left: -32px;
                top: -32px;
                width: calc(100% + 64px);
                height: calc(50% + 32px);
                background-color: #FC9058;
                display: block;
                z-index: -1;
                border-radius: 25% 25% 0 0;
            }
        }
        &:nth-child(odd) {
            &::before {
                content: '';
                position: absolute;
                left: -32px;
                bottom: -32px;
                width: calc(100% + 64px);
                height: calc(50% + 32px);
                background-color: #FC9058;
                display: block;
                z-index: -1;
                border-radius: 0 0 25% 25%;
            }
        }
    }
`
