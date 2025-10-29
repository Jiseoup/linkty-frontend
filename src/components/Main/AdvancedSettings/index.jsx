import { useState } from 'react';

import { Collapse } from '@mui/material';
import dayjs from 'dayjs';

import { MAX_ALIAS_LENGTH } from '../../../constants/Common';
import {
  LOGIN_REQUIRED_TOOLTIP,
  ACTIVE_DATE_TOOLTIP,
  EXPIRE_DATE_TOOLTIP,
  ALIAS_TOOLTIP,
  STARRED_TOOLTIP,
  NON_MEMBER_CREATION_TOOLTIP,
} from '../../../constants/Tooltip';
import DateTimePicker from '../../Common/DateTimePicker';
import FoldButton from '../../Common/FoldButton';
import LabelTooltip from '../../Common/LabelTooltip';
import RowBox from '../../Common/RowBox';
import TextField from '../../Common/TextField';

import {
  FooterBox,
  AliasHelperText,
  ControlLabelBox,
  ControlLabel,
  ControlLabelCheckbox,
} from './styled';

// Component for Advanced Settings operations.
function AdvancedSettings({
  activeDate,
  expireDate,
  alias,
  starred,
  nonMemberCreation,
  setActiveDate,
  setExpireDate,
  setAlias,
  setStarred,
  setNonMemberCreation,
  isLoggedIn,
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
            label={
              <LabelTooltip
                label="URL 활성일"
                tooltip={
                  isLoggedIn ? ACTIVE_DATE_TOOLTIP : LOGIN_REQUIRED_TOOLTIP
                }
              />
            }
            value={activeDate ? dayjs(activeDate) : null}
            onChange={setActiveDate}
            disabled={!isLoggedIn | nonMemberCreation}
          />

          <DateTimePicker
            label={
              <LabelTooltip
                label="URL 만료일"
                tooltip={
                  isLoggedIn ? EXPIRE_DATE_TOOLTIP : LOGIN_REQUIRED_TOOLTIP
                }
              />
            }
            value={expireDate ? dayjs(expireDate) : null}
            onChange={setExpireDate}
            disabled={!isLoggedIn | nonMemberCreation}
          />
        </RowBox>

        {/* URL Alias TextField. */}
        <RowBox sx={{ mb: 0 }}>
          <TextField
            type="text"
            label={
              <LabelTooltip
                label="URL 별칭"
                tooltip={isLoggedIn ? ALIAS_TOOLTIP : LOGIN_REQUIRED_TOOLTIP}
              />
            }
            placeholder="URL 별칭을 입력해주세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            inputProps={{ maxLength: MAX_ALIAS_LENGTH }}
            disabled={!isLoggedIn | nonMemberCreation}
          />
        </RowBox>

        <FooterBox>
          {/* URL Alias HelperText. */}
          <AliasHelperText>
            {`${(alias || '').trim().length} / ${MAX_ALIAS_LENGTH}자`}
          </AliasHelperText>

          <ControlLabelBox>
            {/* Starred Checkbox Control Label. */}
            <ControlLabel
              control={
                <ControlLabelCheckbox
                  size="xs"
                  checked={starred}
                  onChange={(e) => setStarred(e.target.checked)}
                  disabled={!isLoggedIn | nonMemberCreation}
                />
              }
              label={
                <LabelTooltip
                  label="즐겨찾기에 추가"
                  iconSize="14px"
                  tooltip={
                    isLoggedIn ? STARRED_TOOLTIP : LOGIN_REQUIRED_TOOLTIP
                  }
                />
              }
            />

            {/* Non Member Creation Checkbox Control Label. */}
            <ControlLabel
              control={
                <ControlLabelCheckbox
                  size="xs"
                  checked={nonMemberCreation}
                  onChange={(e) => setNonMemberCreation(e.target.checked)}
                  disabled={!isLoggedIn}
                />
              }
              label={
                <LabelTooltip
                  label="비회원으로 생성"
                  iconSize="14px"
                  tooltip={
                    isLoggedIn
                      ? NON_MEMBER_CREATION_TOOLTIP
                      : LOGIN_REQUIRED_TOOLTIP
                  }
                />
              }
            />
          </ControlLabelBox>
        </FooterBox>
      </Collapse>
    </>
  );
}

export default AdvancedSettings;
