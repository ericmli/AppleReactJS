import React, { ReactNode, useEffect, useState } from "react";
import {
  AiFillApple,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineLeft,
} from "react-icons/ai";
import { IconBaseProps } from "react-icons";
import { Box, Fade } from "@mui/material";

import { Text } from "../Text";
import { GetFirebase, useScreenSize } from "../../utils/util";
import theme from "../../theme/theme";

import "bootstrap/dist/css/bootstrap.min.css";

import * as Styled from "./styled";
import { Container } from "react-bootstrap";

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
  const { width } = useScreenSize();
  const [data, setData] = useState<Item[]>([]);
  const [footer, setFooter] = useState<Item[]>([]);
  const [hover, setHover] = useState<boolean>(false);
  const [selectHover, setSelectHover] = useState<string>("");

  useEffect(() => {
    GetFirebase("Header").then((result) => {
      setData(JSON.parse(result));
    });
    GetFirebase("Footer", "order").then((result) => {
      setFooter(JSON.parse(result));
    });
  }, []);

  const ModalBox = () => {
    let filtred: Item[] = [];
    if (selectHover) {
      filtred = data.filter((item) => item.name == selectHover);
      return (
        <Box>
          <Fade in={hover} timeout={250}>
            <Styled.SubList>
              <Styled.ListWitch>
                {filtred[0]?.items.map((elm: string, index: number) => (
                  <Styled.ItemsHeader key={index}>
                    <Text text={elm} color="primary" />
                  </Styled.ItemsHeader>
                ))}
              </Styled.ListWitch>
            </Styled.SubList>
          </Fade>
        </Box>
      );
    }
  };
  const ModalDropDown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<Item | undefined>(undefined);

    return (
      <Styled.ContainerDropDown hover={hover ? 1 : 0}>
        {open && (
          <AiOutlineLeft
            style={{ position: "absolute", left: 15, top: 8, color: "white" }}
            size={28}
            onClick={() => {
              setOpen(false);
              setSelected(undefined);
            }}
          />
        )}
        {!open ? (
          data.map((elm: Item, index: number) => {
            return (
              <Styled.ContainerTextDropDown key={index}>
                <div
                  onClick={() => {
                    setOpen(!open);
                    setSelected(elm);
                  }}
                >
                  {elm.name}
                </div>
                {open && (
                  <>
                    {selected?.items.map((elm: string) => {
                      return <p style={{ fontSize: 12 }}>{elm}</p>;
                    })}
                  </>
                )}
              </Styled.ContainerTextDropDown>
            );
          })
        ) : (
          <>
            {selected?.items.map((elm: string, index: number) => {
              return (
                <Styled.ContainerTextDropDown key={index}>
                  {elm}
                </Styled.ContainerTextDropDown>
              );
            })}
          </>
        )}
      </Styled.ContainerDropDown>
    );
  };

  const Items: React.FC<ModalBoxProps> = ({ icon }) => {
    if (typeof icon === "string") {
      return (
        <Styled.ContainerItems
          onMouseEnter={() => {
            setHover(true);
            setSelectHover(icon);
          }}
        >
          {icon}
        </Styled.ContainerItems>
      );
    }
    return icon;
  };
  return (
    <Styled.Main>
      <Styled.MainHeader
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <Container>
        <Styled.ContainerHeader hover={hover ? 1 : 0}>
          {width > 1000 ? (
            <Styled.ContainerSpace>
              <Styled.HeaderAlign>
                <Styled.ContainerIcon>
                  <Items
                    icon={
                      <AiFillApple color={theme.colors.primary} size={17} />
                    }
                  />
                </Styled.ContainerIcon>
                {data &&
                  data.map((elm: Item, index: number) => (
                    <Items icon={elm.name} key={index} />
                  ))}
                <Styled.ContainerIcon>
                  <Items
                    icon={
                      <AiOutlineSearch color={theme.colors.primary} size={17} />
                    }
                  />
                </Styled.ContainerIcon>
                <Styled.ContainerIcon>
                  <Items
                    icon={
                      <AiOutlineShopping
                        color={theme.colors.primary}
                        size={17}
                      />
                    }
                  />
                </Styled.ContainerIcon>
              </Styled.HeaderAlign>
            </Styled.ContainerSpace>
          ) : (
            <Styled.Wrapper
              onClick={() => setHover(!hover)}
              hover={hover ? 1 : 0}
            >
              <Styled.Bar />
            </Styled.Wrapper>
          )}
        </Styled.ContainerHeader>
        </Container>
        {width > 1000 ? <ModalBox /> : <ModalDropDown />}
      </Styled.MainHeader>
      <Styled.MainHeaderSpacing />
      {children}
      <Styled.Footer>
        <Container>
          <Styled.FooterAlign>
            {footer &&
              footer.map((elm: Item, index: number) => {
                return (
                  <Styled.ContainerDropFooter key={index}>
                    <Styled.TitleFooter
                      style={{
                        color: "#090909",
                        fontSize: 16,
                        margin: "8px 0 8px 0",
                      }}
                    >
                      {elm.name}
                    </Styled.TitleFooter>
                    <div>
                      {elm.items.map((arr, index) => {
                        return (
                          <Styled.TitleFooter key={index}>
                            {arr}
                          </Styled.TitleFooter>
                        );
                      })}
                    </div>
                  </Styled.ContainerDropFooter>
                );
              })}
          </Styled.FooterAlign>
          <Styled.Reserved>
            <Styled.TitleReserved>
              © 2024 Eric Marciano. Este site é uma recriação para fins de
              estudo e não está associado à Apple Inc. Para informações
              oficiais, visite o site da{" "}
              <a href="https://www.apple.com/br/" target="_blank">
                Apple Brasil
              </a>
              .
            </Styled.TitleReserved>
          </Styled.Reserved>
        </Container>
      </Styled.Footer>
    </Styled.Main>
  );
}
