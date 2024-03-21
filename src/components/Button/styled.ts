import styled from 'styled-components';

import { ButtonProps } from '.';

export const Container = styled.div<Omit<ButtonProps, 'text'>>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ theme, top }) => (top ? theme.spacings[top] : '0px')};
    margin-bottom: ${({ theme, bottom }) =>
    bottom ? theme.spacings[bottom] : '0px'};
    text-align: ${({ align }) => (align ? align : 'left')};
    margin-left: ${({ theme, left }) => (left ? theme.spacings[left] : '0px')};
    margin-right: ${({ theme, right }) => (right ? theme.spacings[right] : '0px')};
    padding: ${({ theme, padding }) => (padding ? theme.spacings[padding] : '0px')};
`

export const Button = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.spacings.xsmall};
  cursor: pointer;
  &:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.5px;
        background-color: ${({ theme }) => theme.colors.blue};
    }
`;