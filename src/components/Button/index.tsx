import { Link } from 'react-router-dom';
import * as Styled from './styled';

export interface ButtonProps {
    href?: string;
    text: string;
    align?: 'center' | 'right' | 'left';
    bold?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' ;
    size?:
    | 'nano'
    | 'xnano'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
    padding?:
    | 'nano'
    | 'xnano'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
    top?:
    | 'nano'
    | 'xnano'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
    left?:
    | 'nano'
    | 'xnano'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
    right?:
    | 'nano'
    | 'xnano'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
    bottom?:
    | 'nano'
    | 'xnano'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
    family?:
    | 'Poppins'
    | 'apple'
    | 'Segoe'
    | 'Roboto'
    | 'Oxygen'
    | 'Ubuntu'
    | 'Cantarell'
    | 'Sans'
    | 'Helvetica'
    | 'default';
    color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'dark'
    | 'tertiary'
    | 'white'
    | 'grayDark'
    | 'grayMedium'
    | 'title'
    | 'blue'
    | 'pink'
    | 'gray';
  }
  

export function Button({ href, text, ...rest }: ButtonProps) {
    return (
        <Link to={href || '#'}>
            <Styled.Button {...rest}>{text}</Styled.Button>
        </Link>
    );
}