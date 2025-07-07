import React, { useState } from 'react';

import { Collapse } from '@mui/material';
import dayjs from 'dayjs';

import DateTimePicker from '../../Common/DateTimePicker';
import FoldButton from '../../Common/FoldButton';
import TextField from '../../Common/TextField';
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
            sx={{ mb: 1 }}
          />

          <DateTimePicker
            label="URL 만료일"
            value={expireDate ? dayjs(expireDate) : null}
            onChange={setExpireDate}
            sx={{ mb: 1 }}
          />
        </RowBox>

        {/* URL Alias TextField. */}
        <RowBox>
          <TextField
            type="text"
            label="URL 별칭"
            placeholder="URL 별칭을 입력하세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
        </RowBox>
      </Collapse>
    </>
  );
}

export default AdvancedSettings;
