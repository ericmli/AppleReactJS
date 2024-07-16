import styled from "styled-components";

export const ContainerBanner = styled.section`
    position: relative;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.grayLight};
    margin-top: 20px;
    border-radius: 15px;
`
export const ContainerTitleBanner = styled.div`
    position: absolute;
    width: 20%;
    height: 100%;
    background: #EAEAEA;
    border-radius: 15px 0 0 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`
export const TitleBanner = styled.p`
    @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    }
    animation: blink 1s infinite;
    text-align: center;
    font-weight: 700;
    font-size: 1.8vw;
`
export const ContainerImageBanner = styled.div`
    position: absolute;
    left: 20%;
    width: 80%;
    height: 100%;
`
export const ImageBanner = styled.img`

`