import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import DateTimePicker from '../../../Common/DateTimePicker';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const FilterGroup = styled(Box)({
  minWidth: 200,
});

export const DateRangeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  gap: theme.spacing(1),
  minWidth: 480,
}));

export const DateInput = styled(DateTimePicker)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.paper,
}));

export const TildeSign = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.text.secondary,
  '&::before': {
    content: '"~"',
  },
}));
