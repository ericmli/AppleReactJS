import React, { useEffect, useState } from "react";
import { AiFillApple, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { IconBaseProps } from "react-icons";
import { Box, Fade } from "@mui/material";

import { Text } from "../Text";
import { GetFirebase } from "../../utils/util";
import theme from "../../theme/theme";

import * as Styled from "./styled";

interface ModalBoxProps {
    icon: React.ReactElement<IconBaseProps> | string;
}
interface Item {
    items: [];
    name: string;
}

export default function Header() {
    const [data, setData] = useState<Item[]>([])
    const [hover, setHover] = useState<boolean>(false)
    const [selectHover, setSelectHover] = useState<string>('')

    useEffect(() => {
        GetFirebase('Header').then((result) => {
            setData(JSON.parse(result));
        });
    }, []);


    const ModalBox = () => {
        let filtred: Item[] = []
        if (selectHover) {
            filtred = data.filter(item => item.name == selectHover)
            return (
                <Box>
                    <Fade in={hover} timeout={1000}>
                        <Styled.SubList>
                            <Styled.ListWitch>
                                {filtred[0]?.items.map((elm: string, index: number) =>
                                    <Text key={index} text={elm} color="secondary" size="xxnano" />
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
                <Styled.ContainerItems onMouseEnter={() => { setHover(true); setSelectHover(icon) }} >
                    {icon}
                </Styled.ContainerItems>
            );
        }
        return icon;
    };
    return (
        <Styled.Main onMouseLeave={() => setHover(false)}>
            <Styled.Container hover={hover ? 1 : 0}>
                <Styled.ContainerSpace>
                    <Styled.ContainerIcon>
                        <Items icon={<AiFillApple color={theme.colors.primary} size={17} />} />
                    </Styled.ContainerIcon>
                    {data && data.map((elm: any, index: number) => <Items icon={elm.name} key={index} />)}
                    <Styled.ContainerIcon>
                        <Items icon={<AiOutlineSearch color={theme.colors.primary} size={17} />} />
                    </Styled.ContainerIcon>
                    <Styled.ContainerIcon>
                        <Items icon={<AiOutlineShopping color={theme.colors.primary} size={17} />} />
                    </Styled.ContainerIcon>
                </Styled.ContainerSpace>
            </Styled.Container>
            <ModalBox />
        </Styled.Main>
    )
}