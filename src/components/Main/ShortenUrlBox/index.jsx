import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';

import { useToastContext } from '../../../contexts/ToastContext';

import {
  ShortenUrlCard,
  GridBox,
  ContentBox,
  ContentDivider,
  Label,
  UrlText,
  UrlButton,
  UrlButtonBox,
  DetailBox,
  DetailLabel,
  DetailValue,
  RegisterBox,
  RegisterText,
  RegisterButton,
} from './styled';

// Component for showing the Shorten URL.
function ShortenUrlBox({ shortenUrl }) {
  const navigate = useNavigate();

  const { toastSuccess, toastError } = useToastContext();

  if (!shortenUrl) return null;

  const fullUrl = `${process.env.REACT_APP_BASE_URL}/${shortenUrl}`;

  // Copy URL button click handler.
  const onCopyUrlClick = () => {
    if (!fullUrl) return;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        toastSuccess({ message: 'URL이 클립보드에 복사되었습니다!' });
      })
      .catch(() => {
        toastError({ message: 'URL 복사에 실패했습니다. 다시 시도해주세요.' });
      });
  };

  // Open URL button click handler.
  const onOpenUrlClick = () => {
    if (!fullUrl) return;
    window.open(fullUrl, '_blank', 'noopener noreferrer');
  };

  // Register button click handler.
  const onRegisterClick = () => {
    navigate('/register');
  };

  return (
    <ShortenUrlCard>
      <GridBox>
        {/* Left shorten URL contents. */}
        <ContentBox>
          <Label>단축 URL</Label>
          <UrlText>{fullUrl}</UrlText>

          {/* URL buttons container. */}
          <UrlButtonBox>
            {/* Copy URL button. */}
            <UrlButton
              text="URL 복사"
              variant="contained"
              color="primary"
              startIcon={<ContentCopyIcon />}
              onClick={onCopyUrlClick}
            />

            {/* Open URL button. */}
            <UrlButton
              text="바로가기"
              variant="outlined"
              color="primary"
              startIcon={<OpenInNewIcon />}
              onClick={onOpenUrlClick}
            />
          </UrlButtonBox>
        </ContentBox>

        {/* Vertical contents divider. */}
        <ContentDivider orientation="vertical" flexItem />

        {/* Right URL detail contents. */}
        <ContentBox>
          <Label>URL 상세정보</Label>

          {/* URL alias container. */}
          <DetailBox>
            <DetailLabel>별칭</DetailLabel>
            <DetailValue>이벤트 프로모션 링크</DetailValue>
          </DetailBox>

          {/* URL active date container. */}
          <DetailBox>
            <DetailLabel>활성일</DetailLabel>
            <DetailValue>2024년 05월 02일 13시 03분</DetailValue>
          </DetailBox>

          {/* URL expire date container. */}
          <DetailBox>
            <DetailLabel>만료일</DetailLabel>
            <DetailValue>2025년 06월 02일 13시 03분</DetailValue>
          </DetailBox>
        </ContentBox>

        {/* Bottom register promotion contents. */}
        <RegisterBox>
          <RegisterText>
            🎯 <strong>회원가입하면</strong> URL 별칭, 활성일/만료일 설정, 통계
            확인 등 더 많은 기능을 이용할 수 있어요!
          </RegisterText>

          {/* Register button. */}
          <RegisterButton
            text="회원가입하기"
            variant="contained"
            color="secondary"
            startIcon={<PersonAddIcon />}
            onClick={onRegisterClick}
            size="small"
          />
        </RegisterBox>
      </GridBox>
    </ShortenUrlCard>
  );
}

export default ShortenUrlBox;
