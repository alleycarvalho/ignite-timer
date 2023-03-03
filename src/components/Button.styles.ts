import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.theme['green-500']};
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  height: 40px;
  margin: 8px;
  width: 100px;
`
