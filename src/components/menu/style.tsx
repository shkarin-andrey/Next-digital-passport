import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;

    .menu {
        li {
            position: relative;
            transition: all .3s;
            &::after {
                    content:' ';
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 0%;
                    height: 2px;
                    background-color: #72120C;
                    animation: noLine 0.3s linear;
                }
            &:hover {
                transition: all .3s;
                &::after {
                    left: 0;
                    width: 100%;
                    display: block;
                    animation: goLine 0.3s linear;
                }
            }
            
            a {
                transition: all .3s;
            }
        }
    }

    @keyframes goLine {
        from {
            width: 0%;
        }

        to {
            width: 100%;
        }
    }

    @keyframes noLine {
        from {
            width: 100%;
        }

        to {
            width: 0%;
        }
    }
`
