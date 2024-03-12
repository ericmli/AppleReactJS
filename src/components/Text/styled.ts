import styled from 'styled-components';
import { TitleProps } from '.';

export const Title = styled.p<Omit<TitleProps, 'text'>>`
  font-size: ${({ theme, size }) => theme.font.size[size || 'small']};
  font-family: "Open Sans", sans-serif;
  color: ${({ theme, color }) => theme.colors[color || 'title']};
  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : '0px')};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : '0px'};
  text-align: ${({ align }) => (align ? align : 'left')};
  margin-left: ${({ theme, marginLeft }) => (marginLeft ? theme.spacings[marginLeft] : '0px')};
  margin-right: ${({ theme, marginRight }) => (marginRight ? theme.spacings[marginRight] : '0px')};
`;