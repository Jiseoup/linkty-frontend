import { useState } from 'react';

import { Collapse } from '@mui/material';
import dayjs from 'dayjs';

import { MAX_ALIAS_LENGTH } from '../../../constants/Common';
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
            disabled={!isLoggedIn | nonMemberCreation}
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
                    isLoggedIn
                      ? '체크 시 즐겨찾는 단축 URL로 저장됩니다.'
                      : '로그인 후 이용 가능합니다.'
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
                    isLoggedIn ? (
                      <>
                        체크 시 단축 URL이 계정에 저장되지 않습니다.
                        <br />
                        모든 고급 설정이 적용되지 않습니다.
                      </>
                    ) : (
                      '로그인 후 이용 가능합니다.'
                    )
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
