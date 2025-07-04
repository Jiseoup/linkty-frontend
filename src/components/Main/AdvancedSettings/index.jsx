import React, { useState } from 'react';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TextField, Collapse, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import RowBox from '../RowBox';

// Component for Advanced Settings operations.
function AdvancedSettings({
  activeDate,
  expireDate,
  alias,
  setActiveDate,
  setExpireDate,
  setAlias,
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <>
      {/* Advanced Settings Toggle Button. */}
      <RowBox>
        <Button
          variant="text"
          onClick={() => setShowAdvanced((show) => !show)}
          sx={{ minWidth: 0, mb: 1 }}
        >
          고급 설정 {showAdvanced ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </RowBox>

      {/* Advanced Settings Collapse. */}
      <Collapse in={showAdvanced} timeout="auto" unmountOnExit={true}>
        <RowBox>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            {/* URL Active DateTime Picker. */}
            <DateTimePicker
              label="URL 활성일"
              format="YYYY-MM-DD HH:mm"
              value={activeDate ? dayjs(activeDate) : null}
              onChange={setActiveDate}
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputLabelProps: { shrink: true },
                },
              }}
              sx={{ mb: 1 }}
            />

            {/* URL Expire DateTime Picker. */}
            <DateTimePicker
              label="URL 만료일"
              format="YYYY-MM-DD HH:mm"
              value={expireDate ? dayjs(expireDate) : null}
              onChange={setExpireDate}
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputLabelProps: { shrink: true },
                },
              }}
              sx={{ mb: 1 }}
            />
          </LocalizationProvider>
        </RowBox>

        {/* URL Alias TextField. */}
        <RowBox>
          <TextField
            type="text"
            label="URL 별칭"
            placeholder="URL 별칭을 입력하세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            fullWidth
            size="medium"
            variant="outlined"
            slotProps={{
              inputLabel: { shrink: true },
            }}
          />
        </RowBox>
      </Collapse>
    </>
  );
}

export default AdvancedSettings;
