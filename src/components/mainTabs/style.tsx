import styled from 'styled-components'

export const Wrapper = styled.div`
    box-shadow: 8px 8px 16px rgba(114, 18, 12, 0.25), 4px 4px 8px rgba(114, 18, 12, 0.25);

    .tabs {
        li {
            position: relative;
            
            span {
                transition: all .3s;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: -2px;
                width: 100%;
                height: 3px;
                border-radius: 100%; 
                background: #72120C;
                display: block;
                transform: scale(0);
                transition: all .3s;
            }
            &:hover {
                &::after {
                    transform: scale(1);
                }
                span {
                    color: #72120C;
                }
            }

            &.active {
                &::after {
                    transform: scale(1);
                }

                span {
                    color: #72120C;
                }
            }
        }
    }
    .main__info-content {
        p {
            display: none;
        }
        .active {
            display: block;
        }
    }
`
