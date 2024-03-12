import styled from "styled-components";

interface PropsHeader {
    hover: boolean
}

export const Container = styled.div<PropsHeader>`
  width: 100%;
  height: 5vh;
  min-height: 48px;
  background-color: ${(props) => props.hover ? '#000000' : '#161617CC'};
  display: flex;
  justify-content: center;
`;
export const SubContainer = styled.ul`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;

`
export const SubList = styled.div`
    bottom: 0;
    background-color: #000000;
    padding: 10px;
`;
export const ListContainer = styled.li`
    display: flex;
    align-items: center;
`;
