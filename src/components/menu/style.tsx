import styled from "styled-components";

export const Wrapper = styled.div`
    nav {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .hamburger {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        width: 30px;
        height: 20px;
        cursor: pointer;
        z-index: 10;
        
        span {
            width: 100%;
            height: 2px;
            background: #222222;
            transition: all .3s;
            
            &:first-child{
                width: 60%;
            }
            &:last-child{
                width: 75%;
            }
        }

        &.active {
            justify-content: center;
            align-items: center;
            span {
                position: absolute;
                background: white;
                &:first-child{
                    width: 100%;
                    transform: rotate(45deg);
                }
                &:nth-child(2) {
                    transform: scale(0);
                }
                &:last-child{
                    width: 100%;
                    transform: rotate(-45deg);
                }
            }
        }
    }

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

    @media screen and (max-width: 1023px) {
        nav {
           &.active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,.7);
            display: block;
           }
            
            .menu {
                display: none;
                max-width: 320px;
                height: 100%;
                background: #FC9058;
                padding: 20px;
                &.active {
                    display: block;
                }
            }
        }
    }
`
