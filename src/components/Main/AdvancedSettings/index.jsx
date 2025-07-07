import React, { useState } from 'react';

import { Collapse } from '@mui/material';
import dayjs from 'dayjs';

import DateTimePicker from '../../Common/DateTimePicker';
import FoldButton from '../../Common/FoldButton';
import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

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
      {/* Advanced Settings Fold/Unfold Button. */}
      <RowBox>
        <FoldButton
          label="고급 설정"
          isOpen={showAdvanced}
          onClick={() => setShowAdvanced((show) => !show)}
        />
      </RowBox>

      {/* Advanced Settings Collapse. */}
      <Collapse in={showAdvanced} timeout="auto" unmountOnExit={true}>
        <RowBox>
          <DateTimePicker
            label="URL 활성일"
            value={activeDate ? dayjs(activeDate) : null}
            onChange={setActiveDate}
          />

          <DateTimePicker
            label="URL 만료일"
            value={expireDate ? dayjs(expireDate) : null}
            onChange={setExpireDate}
          />
        </RowBox>

        {/* URL Alias TextField. */}
        <RowBox sx={{ mb: 0 }}>
          <TextField
            type="text"
            label="URL 별칭"
            placeholder="URL 별칭을 입력해주세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
        </RowBox>
      </Collapse>
    </>
  );
}

export default AdvancedSettings;
