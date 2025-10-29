import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useNavigate } from 'react-router-dom';

import { COPY_URL_SUCCESS, COPY_URL_FAILURE } from '../../../constants/Toast';
import { useToastContext } from '../../../contexts/ToastContext';
import { getFullShortenUrl, copyUrl, openUrl } from '../../../utils/url';

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

// Shorten URL Box Component.
function ShortenUrlBox({
  shortenUrl,
  activeDate,
  expireDate,
  alias,
  isLoggedIn,
}) {
  const navigate = useNavigate();

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
              onClick={() => openUrl(fullUrl)}
            />
          </UrlButtonBox>
        </ContentBox>

        {/* Vertical contents divider. */}
        <ContentDivider orientation="vertical" flexItem />

        {/* Right URL detail contents. */}
        <ContentBox>
          <Label>URL 상세 정보</Label>

          {/* URL alias container. */}
          <DetailBox>
            <DetailLabel>별칭</DetailLabel>
            <DetailValue>
              {alias ? alias : !isLoggedIn ? '로그인 후 이용 가능' : '없음'}
            </DetailValue>
          </DetailBox>

          {/* URL active date container. */}
          <DetailBox>
            <DetailLabel>활성일</DetailLabel>
            <DetailValue>
              {activeDate
                ? dayjs(activeDate).format('YYYY년 MM월 DD일 HH시 mm분')
                : !isLoggedIn
                  ? '로그인 후 이용 가능'
                  : '없음'}
            </DetailValue>
          </DetailBox>

          {/* URL expire date container. */}
          <DetailBox>
            <DetailLabel>만료일</DetailLabel>
            <DetailValue>
              {expireDate
                ? dayjs(expireDate).format('YYYY년 MM월 DD일 HH시 mm분')
                : !isLoggedIn
                  ? '로그인 후 이용 가능'
                  : '없음'}
            </DetailValue>
          </DetailBox>
        </ContentBox>

        {!isLoggedIn && (
          <>
            {/* Bottom register promotion contents. */}
            <RegisterBox>
              {/* TODO: 메시지 변경 필요할 수도 있음 */}
              <RegisterText>
                🎯 <strong>회원가입 후</strong> URL 별칭, 활성일/만료일 설정,
                통계 확인 등 다양한 기능을 <strong>무료로</strong> 이용해보세요!
              </RegisterText>

              {/* Register button. */}
              <RegisterButton
                text="회원가입"
                variant="contained"
                color="secondary"
                startIcon={<PersonAddIcon />}
                onClick={onRegisterClick}
              />
            </RegisterBox>
          </>
        )}
      </GridBox>
    </ShortenUrlCard>
  );
}

export default ShortenUrlBox;
