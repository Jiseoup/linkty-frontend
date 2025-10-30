import { useState } from 'react';

import LinkIcon from '@mui/icons-material/Link';
import dayjs from 'dayjs';

import { MAX_ALIAS_LENGTH } from '../../../../constants/Common';
import {
  ACTIVE_DATE_TOOLTIP,
  EXPIRE_DATE_TOOLTIP,
  SHORT_ALIAS_TOOLTIP,
  STARRED_TOOLTIP,
  NON_MEMBER_CREATION_TOOLTIP,
} from '../../../../constants/Tooltip';
import { useAlertContext } from '../../../../contexts/AlertContext';
import { parseErrorMessage } from '../../../../exceptions/errorParser';
import { postShortenUrl } from '../../../../services/shortenUrl';
import { formatDatetime } from '../../../../utils/datetime';
import DateTimePicker from '../../../Common/DateTimePicker';
import Dialog from '../../../Common/Dialog';
import HelperText from '../../../Common/HelperText';
import LabelTooltip from '../../../Common/LabelTooltip';
import TextField from '../../../Common/TextField';
import UrlSuccessDialog from '../UrlSuccessDialog';

import {
  FormBox,
  RowFormBox,
  CheckboxFormBox,
  Label,
  ControlLabel,
  ControlLabelCheckbox,
  FormButton,
} from './styled';

function UrlDialog({ isOpen, onClose }) {
  const { alertError } = useAlertContext();

  const [originalUrl, setOriginalUrl] = useState(null);
  const [activeDate, setActiveDate] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [alias, setAlias] = useState(null);
  const [starred, setStarred] = useState(false);
  const [nonMemberCreation, setNonMemberCreation] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [urlInfo, setUrlInfo] = useState({
    shortenUrl: null,
    activeDate: null,
    expireDate: null,
    alias: null,
  });

  // Reset state when dialog closes.
  const resetAndClose = () => {
    [setOriginalUrl, setActiveDate, setExpireDate, setAlias].forEach((setter) =>
      setter(null)
    );
    [setStarred, setNonMemberCreation].forEach((setter) => setter(false));
    onClose();
  };

  // Shorten URL Button Click Handler.
  const onShortenUrlButtonClick = async (e) => {
    e.preventDefault();

    try {
      const formattedActiveDate = formatDatetime(activeDate);
      const formattedExpireDate = formatDatetime(expireDate);

      const response = await postShortenUrl({
        originalUrl: originalUrl,
        activeDate: formattedActiveDate || null,
        expireDate: formattedExpireDate || null,
        alias: alias || null,
        starred: starred || false,
        nonMemberCreation: nonMemberCreation || false,
      });

      // Set created shorten url informations.
      setUrlInfo({
        shortenUrl: response.shortenUrl,
        activeDate: response.activeDate,
        expireDate: response.expireDate,
        alias: response.alias,
      });

      // Close Url Dialog and Open Url Success Dialog.
      resetAndClose();
      setIsSuccessDialogOpen(true);
    } catch (error) {
      alertError({
        title: 'URL 단축에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <>
      <Dialog
        title="새 URL 생성"
        titleColor="primary"
        icon={<LinkIcon fontSize="medium" color="primary" />}
        isOpen={isOpen}
        onClose={resetAndClose}
        showFooter={false}
      >
        {/* Original URL input component. */}
        <FormBox>
          <Label required>원본 URL</Label>
          <TextField
            type="text"
            placeholder="단축할 URL을 입력해주세요."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </FormBox>

        {/* URL active/expire date input component. */}
        <RowFormBox>
          {/* Active Date. */}
          <FormBox>
            <Label>
              <LabelTooltip label="URL 활성일" tooltip={ACTIVE_DATE_TOOLTIP} />
            </Label>
            <DateTimePicker
              value={activeDate ? dayjs(activeDate) : null}
              onChange={setActiveDate}
              disabled={nonMemberCreation}
            />
          </FormBox>

          {/* Expire Date. */}
          <FormBox>
            <Label>
              <LabelTooltip label="URL 만료일" tooltip={EXPIRE_DATE_TOOLTIP} />
            </Label>
            <DateTimePicker
              value={expireDate ? dayjs(expireDate) : null}
              onChange={setExpireDate}
              disabled={nonMemberCreation}
            />
          </FormBox>
        </RowFormBox>

        {/* URL alias input component. */}
        <FormBox sx={{ mb: 1 }}>
          <Label>
            <LabelTooltip label="URL 별칭" tooltip={SHORT_ALIAS_TOOLTIP} />
          </Label>
          <TextField
            type="text"
            placeholder="URL 별칭을 입력해주세요."
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            disabled={nonMemberCreation}
            inputProps={{ maxLength: MAX_ALIAS_LENGTH }}
          />
          <HelperText>
            {`${(alias || '').trim().length} / ${MAX_ALIAS_LENGTH}자`}
          </HelperText>
        </FormBox>

        <CheckboxFormBox>
          {/* Starred Checkbox Control Label. */}
          <ControlLabel
            control={
              <ControlLabelCheckbox
                size="small"
                checked={starred}
                onChange={(e) => setStarred(e.target.checked)}
                disabled={nonMemberCreation}
              />
            }
            label={
              <LabelTooltip label="즐겨찾기에 추가" tooltip={STARRED_TOOLTIP} />
            }
          />

          {/* Non Member Creation Checkbox Control Label. */}
          <ControlLabel
            control={
              <ControlLabelCheckbox
                size="small"
                checked={nonMemberCreation}
                onChange={(e) => setNonMemberCreation(e.target.checked)}
              />
            }
            label={
              <LabelTooltip
                label="비회원으로 생성"
                tooltip={NON_MEMBER_CREATION_TOOLTIP}
              />
            }
          />
        </CheckboxFormBox>

        <RowFormBox>
          {/* Cancel button component. */}
          <FormButton
            text="취소"
            variant="outlined"
            color="primary"
            onClick={resetAndClose}
            fullWidth
          />

          {/* Shorten URL button component. */}
          <FormButton
            text="URL 단축"
            variant="contained"
            color="primary"
            onClick={onShortenUrlButtonClick}
            fullWidth
          />
        </RowFormBox>
      </Dialog>

      {/* Shorten URL Result Dialog */}
      <UrlSuccessDialog
        isOpen={isSuccessDialogOpen}
        onClose={() => setIsSuccessDialogOpen(false)}
        shortenUrl={urlInfo.shortenUrl}
        activeDate={urlInfo.activeDate}
        expireDate={urlInfo.expireDate}
        alias={urlInfo.alias}
      />
    </>
  );
}

export default UrlDialog;
