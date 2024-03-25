import React, { ReactNode, useEffect, useState } from "react";
import { AiFillApple, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { IconBaseProps } from "react-icons";
import { Box, Fade } from "@mui/material";

import { Text } from "../Text";
import { GetFirebase } from "../../utils/util";
import theme from "../../theme/theme";

import * as Styled from "./styled";

interface BodyProps {
    children: ReactNode;
}
interface ModalBoxProps {
    icon: React.ReactElement<IconBaseProps> | string;
}
interface Item {
    items: [];
    name: string;
}

export function Body({ children }: BodyProps) {
    const [data, setData] = useState<Item[]>([])
    const [footer, setFooter] = useState<Item[]>([])
    const [hover, setHover] = useState<boolean>(false)
    const [selectHover, setSelectHover] = useState<string>('')

    useEffect(() => {
        GetFirebase('Header').then((result) => {
            setData(JSON.parse(result));
        });
        GetFirebase('Footer', 'order').then((result) => {
            setFooter(JSON.parse(result));
        });
    }, []);

    const ModalBox = () => {
        let filtred: Item[] = []
        if (selectHover) {
            filtred = data.filter(item => item.name == selectHover)
            return (
                <Box>
                    <Fade in={hover} timeout={250} >
                        <Styled.SubList>
                            <Styled.ListWitch>
                                {filtred[0]?.items.map((elm: string, index: number) =>
                                    <Styled.ItemsHeader key={index}>
                                        <Text text={elm} color="primary" />
                                    </Styled.ItemsHeader>
                                )}
                            </Styled.ListWitch>
                        </Styled.SubList>
                    </Fade>
                </Box>
            )
        }
    }

    const Items: React.FC<ModalBoxProps> = ({ icon }) => {
        if (typeof icon === 'string') {
            return (
                <Styled.ContainerItems onMouseEnter={() => { setHover(true); setSelectHover(icon); }} >
                    {icon}
                </Styled.ContainerItems>
            );
        }
        return icon;
    };

    return (
        <Styled.Main>
            <Styled.MainHeader onMouseLeave={() => setHover(false)}>
                <Styled.ContainerHeader hover={hover ? 1 : 0}>
                    <Styled.ContainerSpace>
                        <Styled.HeaderAlign>
                            <Styled.ContainerIcon>
                                <Items icon={<AiFillApple color={theme.colors.primary} size={17} />} />
                            </Styled.ContainerIcon>
                            {data && data.map((elm: Item, index: number) => <Items icon={elm.name} key={index} />)}
                            <Styled.ContainerIcon>
                                <Items icon={<AiOutlineSearch color={theme.colors.primary} size={17} />} />
                            </Styled.ContainerIcon>
                            <Styled.ContainerIcon>
                                <Items icon={<AiOutlineShopping color={theme.colors.primary} size={17} />} />
                            </Styled.ContainerIcon>
                        </Styled.HeaderAlign>
                    </Styled.ContainerSpace>
                </Styled.ContainerHeader>
                <ModalBox />
            </Styled.MainHeader>
            {children}
            <Styled.Footer>
                <Styled.ContainerSpace>
                    <Styled.FooterAlign>
                        {footer && footer.map((elm: Item, index: number) => {
                            return (
                                <Styled.TitleFooter key={index}>
                                    <p style={{ color: '#090909', fontSize: 16, marginBottom: 8 }}>{elm.name}</p>
                                    {elm.items.map((arr, index) => {
                                        return (
                                            <p style={{ marginBottom: 8, cursor: 'pointer' }} key={index}>
                                                {arr}
                                            </p>
                                        )
                                    })}
                                </Styled.TitleFooter>
                            )
                        })}
                    </Styled.FooterAlign>
                </Styled.ContainerSpace>
                <Styled.Reserved>
                    <Styled.TitleFooter>
                        © 2024 Eric Marciano.
                        Este site é uma recriação para fins de estudo e não está associado à Apple Inc.
                        Para informações oficiais, visite o site da <a href="https://www.apple.com/br/" target="_blank" >Apple Brasil</a>.
                    </Styled.TitleFooter>
                </Styled.Reserved>
            </Styled.Footer>
        </Styled.Main>
    )
}