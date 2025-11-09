import styled from 'styled-components';

export const AboutVisualStyle = styled.div`
    margin: 140px 0 300px 0;
    .inner {
        display: flex;

        .txt {
            margin-top: 120px;
            h2 {
                font-family: serif;
                color: #666;
                font-size: 60px;
                font-weight: 400;
                margin-bottom: 60px;
                span {
                    font-weight: 600;
                    color: #222;
                    margin-left: 30px;
                }
            }
            p {
                margin-left: 40px;
                font-size: 14px;
                color: #666;
                line-height: 2;
            }
        }
        .pic {
            position: relative;
            img {
                &:nth-child(1) {
                    position: absolute;
                    left: 120px;
                    top: -20px;
                }
                &:nth-child(2) {
                    position: absolute;
                    left: 500px;
                    top: -40px;
                    width: 400px;
                    z-index: -1;
                }

                &:nth-child(3) {
                    position: absolute;
                    left: 180px;
                    top: 180px;
                }
            }
        }
        .btn {
            /* position: relative; */
            cursor: pointer;
            &:hover {
                color: hotpink;
                font-weight: 500;
            }
            p {
                position: absolute;
                right: 470px;
                bottom: 0;
                font-size: 20px;
                padding: 10px;
            }
            img {
                position: absolute;
                right: 480px;
                bottom: 50px;
                font-size: 18px;
            }
        }
    }
`;
