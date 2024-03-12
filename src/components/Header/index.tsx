import { AiFillApple, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";

import * as Styled from "./styled";
import { Text } from "../Text";
import { useState } from "react";


export default function Header() {
    const [hover, setHover] = useState<boolean>(false)
    console.log(hover);
    
    return (
        <>
            <Styled.Container hover={hover}>
                <Styled.SubContainer>
                    <Styled.ListContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <AiFillApple color="white" size={17} />
                    </Styled.ListContainer>
                    <Styled.ListContainer><Text text="Loja" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="Mac" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="iPad" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="Watch" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="AirPods" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="TV e Casa" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="Entretenimento" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="Acessórios" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><Text text="Suporte" color="secondary" size="xxnano" /></Styled.ListContainer>
                    <Styled.ListContainer><AiOutlineSearch color="white" size={17} /></Styled.ListContainer>
                    <Styled.ListContainer><AiOutlineShopping color="white" size={17} /></Styled.ListContainer>
                </Styled.SubContainer>
            </Styled.Container>
            {hover && <Styled.SubList>
                <Text text="Teste" color="secondary" size="xxnano" />
                </Styled.SubList>}
        </>
    )
}