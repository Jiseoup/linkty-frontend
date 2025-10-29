import Tooltip from '../ToolTip';

import { Container, HelpIcon } from './styled';

// Label Tooltip Component.
function LabelTooltip({ label, tooltip, iconSize = 16 }) {
  return (
    <Container>
      {label}
      <Tooltip title={tooltip}>
        <HelpIcon sx={{ fontSize: iconSize }} />
      </Tooltip>
    </Container>
  );
}

export default LabelTooltip;
