import styled from 'styled-components';
import { TitleProps } from '.';

export const Title = styled.p<Omit<TitleProps, 'text'>>`
  font-size: ${({ theme, size }) => theme.font.size[size || 'small']};
  font-family: ${({family, theme}) => theme.font.family[family || 'default']};
  font-weight: ${({ bold }) => (bold && bold)};
  color: ${({ theme, color }) => theme.colors[color || 'title']};
  margin-top: ${({ theme, top }) => (top ? theme.spacings[top] : '0px')};
  margin-bottom: ${({ theme, bottom }) =>
  bottom ? theme.spacings[bottom] : '0px'};
  text-align: ${({ align }) => (align ? align : 'left')};
  margin-left: ${({ theme, left }) => (left ? theme.spacings[left] : '0px')};
  margin-right: ${({ theme, right }) => (right ? theme.spacings[right] : '0px')};
  padding: ${({ theme, padding }) => (padding ? theme.spacings[padding] : '0px')};
`;