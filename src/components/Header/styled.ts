import styled from "styled-components";

interface PropsHeader {
    hover: number
}

export const Main = styled.div`
  
`;
export const Container = styled.div<PropsHeader>`
  width: 100%;
  height: 5vh;
  min-height: 48px;
  background-color: ${props => props.hover ? '#000000' : '#161617CC'};
  display: flex;
  justify-content: center;
  transition: background-color 1ms ease;
`;
export const ContainerSpace = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerIcon = styled.div`
    cursor: pointer;
`;
export const ContainerItems = styled.div`
    font-size: ${({ theme}) => theme.spacings.xxnano};
    font-family: "Open Sans", sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`;

export const SubList = styled.div`
    position: absolute;
    background-color: #000000;
    height: 40vh;
    width: 100vw;
    padding-top: ${({ theme}) => theme.spacings.small};
`;
export const ListWitch = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;