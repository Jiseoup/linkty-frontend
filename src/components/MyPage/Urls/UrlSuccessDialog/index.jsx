import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import dayjs from 'dayjs';

import {
  COPY_URL_FAILURE,
  COPY_URL_SUCCESS,
} from '../../../../constants/Toast';
import { useToastContext } from '../../../../contexts/ToastContext';
import { getFullShortenUrl, copyUrl, openUrl } from '../../../../utils/url';
import Dialog from '../../../Common/Dialog';

import {
  SuccessAlert,
  UrlDisplayBox,
  UrlTitle,
  UrlText,
  UrlButtonBox,
  UrlButton,
  ContentDivider,
  DetailTitle,
  DetailGrid,
  DetailItem,
  DetailLabel,
  DetailValue,
} from './styled';

function UrlSuccessDialog({
  isOpen,
  onClose,
  shortenUrl,
  activeDate,
  expireDate,
  alias,
}) {
  const { toastSuccess, toastError } = useToastContext();

  if (!shortenUrl) return null;

  const fullUrl = getFullShortenUrl(shortenUrl);

  // Copy URL button click handler.
  const onCopyUrlClick = async () => {
    const success = await copyUrl(fullUrl);
    if (success) {
      toastSuccess({ message: COPY_URL_SUCCESS });
    } else {
      toastError({ message: COPY_URL_FAILURE });
    }
  };

  return (
    <Dialog
      title="URL 단축 성공"
      titleColor="primary"
      icon={<CheckCircleIcon fontSize="medium" color="primary" />}
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* Shorten URL successful alert. */}
      <SuccessAlert severity="success">
        단축 URL이 성공적으로 생성되었습니다!
      </SuccessAlert>

      {/* URL display box. */}
      <UrlDisplayBox>
        <UrlTitle>단축 URL</UrlTitle>
        <UrlText>{fullUrl}</UrlText>
      </UrlDisplayBox>

      <UrlButtonBox>
        {/* Copy URL Button. */}
        <UrlButton
          text="URL 복사"
          variant="contained"
          color="primary"
          startIcon={<ContentCopyIcon />}
          onClick={onCopyUrlClick}
          fullWidth
        />

        {/* Open URL button. */}
        <UrlButton
          text="바로가기"
          variant="outlined"
          color="primary"
          startIcon={<OpenInNewIcon />}
          onClick={() => openUrl(fullUrl)}
          fullWidth
        />
      </UrlButtonBox>

      {/* Content divider. */}
      <ContentDivider />

      {/* URL details. */}
      <DetailTitle>URL 상세 정보</DetailTitle>
      <DetailGrid>
        {/* URL Alias. */}
        <DetailItem>
          <DetailLabel>별칭</DetailLabel>
          <DetailValue>{alias || '없음'}</DetailValue>
        </DetailItem>

        {/* URL Active Date. */}
        <DetailItem>
          <DetailLabel>활성일</DetailLabel>
          <DetailValue>
            {activeDate
              ? dayjs(activeDate).format('YYYY년 MM월 DD일 HH시 mm분')
              : '없음'}
          </DetailValue>
        </DetailItem>

        {/* URL Expire Date. */}
        <DetailItem>
          <DetailLabel>만료일</DetailLabel>
          <DetailValue>
            {expireDate
              ? dayjs(expireDate).format('YYYY년 MM월 DD일 HH시 mm분')
              : '없음'}
          </DetailValue>
        </DetailItem>
      </DetailGrid>
    </Dialog>
  );
}

export default UrlSuccessDialog;
