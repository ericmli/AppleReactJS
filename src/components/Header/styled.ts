import styled from "styled-components";

interface PropsHeader {
  hover: number
}

export const Main = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9999;
  
`;
export const Container = styled.div<PropsHeader>`
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
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 5px;
      width: 30px;
      background-color: #333;
    }
    
    /* Estilizando a barra lateral direita */
    &::after {
      content: '';
      position: absolute;
      top: 20px;
      right: 0;
      height: 5px;
      width:30px;
      background-color: #333;
    }
  }
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