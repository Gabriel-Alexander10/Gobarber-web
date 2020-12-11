import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  // estilizações superiores são de classes do css no styled-components
}

const Tooltip: React.FC<TooltipProps> = ({ className, title, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
