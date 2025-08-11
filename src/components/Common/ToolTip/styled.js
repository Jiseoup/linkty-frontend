import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tooltip.main,
    color: theme.palette.tooltip.contrastText,
    fontSize: '12px',
    padding: '8px 12px',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    maxWidth: 260,
    whiteSpace: 'pre-line',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.tooltip.main,
  },
}));
