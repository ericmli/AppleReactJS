import styled from "styled-components";

interface PropsHeader {
  hover: number
}

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
  background-color: ${props => props.hover ? '#000000ff' : '#050507b7'};
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;

`;
export const ContainerSpace = styled.div`
  width: 60%;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
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
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
`
export const FooterAlign = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 40vh;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.xxnano};
`
export const TitleFooter = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.spacings.small};
`
export const Reserved = styled.div`
  width: 60vw;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacings.xxlarge};
`

