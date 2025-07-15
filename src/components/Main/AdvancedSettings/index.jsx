import React, { useState } from 'react';

import { Collapse, FormHelperText } from '@mui/material';
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
  const MAX_ALIAS_LENGTH = 20;

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
        <RowBox sx={{ mb: 0, flexDirection: 'column' }}>
          <TextField
            type="text"
            label="URL 별칭"
            placeholder="URL 별칭을 입력해주세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            inputProps={{ maxLength: MAX_ALIAS_LENGTH }}
          />
        </RowBox>
        <FormHelperText sx={{ ml: 1.2 }}>
          {`${(alias || '').trim().length} / ${MAX_ALIAS_LENGTH}자`}
        </FormHelperText>
      </Collapse>
    </>
  );
}

export default AdvancedSettings;
