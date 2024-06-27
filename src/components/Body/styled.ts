import styled, { css, keyframes } from "styled-components";

interface PropsHeader {
  hover: number
}

const openDropDown = keyframes`
  from { height: 0 }
  to { height: 100vh }
`;

export const Main = styled.div`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`

//  Header
export const MainHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9999;
`;
export const ContainerHeader = styled.div<PropsHeader>`
  width: 100%;
  height: 5vh;
  min-height: 48px;
  background-color: ${({ hover }) => hover ? '#000000ff' : '#050507b7'};
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    justify-content: flex-end;
    background-color: ${({ theme, hover }) => hover ? theme.colors.grayMedium : '#050507b7'};
  }
`;
export const ContainerSpace = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Bar = styled.div`
  left: 0;
  top: 25%;
  width: 0%;
  height: 3px;
  background: #FFF;
  &::before {
    content: '';
    transition: transform 0.1s ease-in-out;
    position: absolute;
    width: 50%;
    height: 3px;
    background: #FFF;
    top: 15px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    background: #FFF;
    top: 30px;
  }
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  transition: height 0.3s ease;
`
export const Wrapper = styled.div<PropsHeader>`
  position: relative;
  width: 50px;
  height: 100%;
  ${props => props.hover &&
    `::before {
      transform: rotate(-45deg);
      top: 20px;
      transition: transform 0.3s ease;
    }
    ::after {
      transform: rotate(-140deg);
      top: 20px;
      transition: transform 0.3s ease;
    }`
  }
`;

export const ContainerDropDown = styled.div<PropsHeader>`
  width: 0;
  height: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  ${(props) => props.hover && css`
    height: 100vh;
    width: 100%;
    animation-duration: 0.5s;
    animation-name: ${openDropDown};
    `}
`;

export const ContainerTextDropDown = styled.div`
  width: 80%;
  margin: auto;
  color: white;
  font-size: 5vw;
  margin-bottom: 20px;
  word-wrap: break-word;
`

export const HeaderAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ContainerIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ContainerItems = styled.div`
    font-size: ${({ theme }) => theme.spacings.xxnano};
    font-family: ${({ theme }) => theme.font.family.Sans};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`;

export const SubList = styled.div`
    position: absolute;
    background-color: #000000ff;
    min-height: 20vh;
    width: 100%;
    padding-top: ${({ theme }) => theme.spacings.small};
    z-index: 9999;
`;
export const ListWitch = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;
export const ItemsHeader = styled.div`
    margin-bottom: 20px;
    cursor: pointer;
    `

// Footer
export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.grayLight};
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0px 20px 0px;

`
export const FooterAlign = styled.ul`
  list-style: none;
  gap: ${({ theme }) => theme.spacings.xxnano};
  display: flex;
  padding: 10px;
  width: 60%;
  @media (max-width: 1400px) {
    width: 90%;
  }
  @media (max-width: 1000px) {
    display: block;
  }
`
export const ContainerDropFooter = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.spacings.small};
  border-bottom: 0px solid black;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1000px) {
    display: block;
    margin-top: 10px;
    height: 30px;
  
  &:hover {
    transition: width 1s, height 1s;
    transition-delay: 0s, 0.7s;
    height: auto;
  }
}
`
export const TitleFooter = styled.p`
   display: flex;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.spacings.small};
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.colors.dimGray};
  }
  margin-bottom: 2px;
`
export const Reserved = styled.div`
  width: 60vw;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacings.xxlarge};

`
export const TitleReserved = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.spacings.small};
  text-align: center;

`

