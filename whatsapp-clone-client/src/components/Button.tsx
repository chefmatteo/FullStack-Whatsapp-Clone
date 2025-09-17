import styled, { css } from 'styled-components';

// Define the props interface for TypeScript
interface ButtonProps {
  readonly primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default Button;
