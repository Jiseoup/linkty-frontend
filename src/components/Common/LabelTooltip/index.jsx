import React from 'react';

import { Container, HelpIcon, StyledTooltip } from './styled';

// Label Tooltip Component.
function LabelTooltip({ label, tooltip }) {
  return (
    <Container>
      {label}
      <StyledTooltip title={tooltip} arrow>
        <HelpIcon />
      </StyledTooltip>
    </Container>
  );
}

export default LabelTooltip;
