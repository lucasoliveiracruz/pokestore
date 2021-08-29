import { ButtonComponent } from "./styles";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <ButtonComponent type="button" onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}
