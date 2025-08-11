import { StyledTooltip } from './styled';

// Common Tooltip Component.
function Tooltip({ title, children, arrow = true, ...props }) {
  return (
    <StyledTooltip title={title} arrow={arrow} {...props}>
      {children}
    </StyledTooltip>
  );
}

export default Tooltip;
