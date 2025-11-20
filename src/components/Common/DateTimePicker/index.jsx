import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/ko';

import { StyledDateTimePicker } from './styled';

// Basic DateTimePicker Component.
function DateTimePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <StyledDateTimePicker {...props} />
    </LocalizationProvider>
  );
}

DateTimePicker.defaultProps = {
  format: 'YYYY-MM-DD hh:mm',
  slotProps: {
    textField: {
      fullWidth: true,
      InputLabelProps: { shrink: true },
    },
  },
};

export default DateTimePicker;
