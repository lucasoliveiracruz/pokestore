import { ReactNode } from "react";
import { Container } from "./styles";

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode;
  showTooltip?: boolean;
}

export function Tooltip({
  children,
  className,
  title,
  showTooltip,
}: TooltipProps) {
  if (!showTooltip) {
    return <>{children}</>;
  }
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}
