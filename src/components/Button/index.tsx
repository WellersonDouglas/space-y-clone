import { ButtonVariant } from './styles'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <>
      <ButtonVariant>{text}</ButtonVariant>
    </>
  )
}
