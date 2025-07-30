import { useState } from 'react';

import { Collapse } from '@mui/material';
import dayjs from 'dayjs';

import DateTimePicker from '../../Common/DateTimePicker';
import FoldButton from '../../Common/FoldButton';
import LabelTooltip from '../../Common/LabelTooltip';
import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

import { AliasHelperText } from './styled';

// Component for Advanced Settings operations.
function AdvancedSettings({
  activeDate,
  expireDate,
  alias,
  setActiveDate,
  setExpireDate,
  setAlias,
  isLoggedIn,
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
            label={
              <LabelTooltip
                label="URL 활성일"
                tooltip={
                  isLoggedIn ? (
                    <>
                      설정한 시점 이전에는 단축 URL이 비활성화됩니다.
                      <br />
                      시점은 단축 URL을 생성한 사용자의 시스템 시간을 기준으로
                      적용됩니다.
                    </>
                  ) : (
                    '로그인 후 이용 가능합니다.'
                  )
                }
              />
            }
            value={activeDate ? dayjs(activeDate) : null}
            onChange={setActiveDate}
            disabled={!isLoggedIn}
          />

          <DateTimePicker
            label={
              <LabelTooltip
                label="URL 만료일"
                tooltip={
                  isLoggedIn ? (
                    <>
                      설정한 시점 이후에는 단축 URL이 비활성화됩니다.
                      <br />
                      시점은 단축 URL을 생성한 사용자의 시스템 시간을 기준으로
                      적용됩니다.
                    </>
                  ) : (
                    '로그인 후 이용 가능합니다.'
                  )
                }
              />
            }
            value={expireDate ? dayjs(expireDate) : null}
            onChange={setExpireDate}
            disabled={!isLoggedIn}
          />
        </RowBox>

        {/* URL Alias TextField. */}
        <RowBox sx={{ mb: 0 }}>
          <TextField
            type="text"
            label={
              <LabelTooltip
                label="URL 별칭"
                tooltip={
                  isLoggedIn ? (
                    <>
                      단축 URL의 별칭을 설정합니다.
                      <br />
                      생성한 URL은 마이페이지에서 관리 가능합니다.
                    </>
                  ) : (
                    '로그인 후 이용 가능합니다.'
                  )
                }
              />
            }
            placeholder="URL 별칭을 입력해주세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            inputProps={{ maxLength: MAX_ALIAS_LENGTH }}
            disabled={!isLoggedIn}
          />
        </RowBox>
        <AliasHelperText>
          {`${(alias || '').trim().length} / ${MAX_ALIAS_LENGTH}자`}
        </AliasHelperText>
      </Collapse>
    </>
  );
}

export default AdvancedSettings;
