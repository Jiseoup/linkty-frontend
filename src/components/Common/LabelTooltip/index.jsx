import Tooltip from '../ToolTip';

import { Container, HelpIcon } from './styled';

// Label Tooltip Component.
function LabelTooltip({ label, tooltip }) {
  return (
    <Container>
      {label}
      <Tooltip title={tooltip}>
        <HelpIcon />
      </Tooltip>
    </Container>
  );
}

export default LabelTooltip;
