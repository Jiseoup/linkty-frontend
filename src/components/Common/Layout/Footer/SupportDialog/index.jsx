import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import { useToastContext } from '../../../../../contexts/ToastContext';

import {
  DialogWrapper,
  Header,
  TitleBox,
  TitleText,
  CloseButton,
  BodyContent,
  MessageBox,
  MainMessage,
  SubMessage,
  EmailBox,
  EmailHeader,
  EmailText,
  EmailAddress,
  EmailButton,
  EmailButtonBox,
  InfoBox,
  InfoText,
  Footer,
  ConfirmButton,
} from './styled';

function SupportDialog({ isOpen, onClose }) {
  const { toastSuccess, toastError } = useToastContext();

  const email = process.env.REACT_APP_SUPPORT_EMAIL;

  // Copy email button click handler.
  const onCopyEmailClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toastSuccess({ message: '이메일 주소가 클립보드에 복사되었습니다!' });
      })
      .catch(() => {
        toastError({
          message: '이메일 주소 복사에 실패했습니다. 다시 시도해주세요.',
        });
      });
  };

  // Send email button click handler.
  const onSendEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <DialogWrapper open={isOpen} onClose={onClose} aria-labelledby="cs-title">
      {/* Header contents. */}
      <Header>
        {/* Title text. */}
        <TitleBox>
          <SupportAgentIcon fontSize="medium" color="primary" />
          <TitleText id="cs-title">고객센터</TitleText>
        </TitleBox>

        {/* Close Button. */}
        <CloseButton onClick={onClose} aria-label="닫기">
          <CloseIcon />
        </CloseButton>
      </Header>

      {/* Body contents. */}
      <BodyContent dividers>
        {/* Announcement messages. */}
        <MessageBox>
          <MainMessage>
            서비스 관련 문의는 아래 이메일로 연락 부탁드립니다.
          </MainMessage>
          <SubMessage>
            Linkty 서비스 이용 중 불편 사항이나 문의가 있으시면
            <br />
            언제든지 연락해 주세요. 최대한 빠른 시일 내에 답변드리겠습니다.
          </SubMessage>
        </MessageBox>
        {/* Email contents. */}
        <EmailBox>
          {/* Email title text. */}
          <EmailHeader>
            <MailOutlineIcon fontSize="small" />
            <EmailText>이메일 주소</EmailText>
          </EmailHeader>

          {/* Email address box. */}
          <EmailAddress>{email}</EmailAddress>

          {/* Email buttons container. */}
          <EmailButtonBox>
            {/* Copy email button. */}
            <EmailButton
              text="이메일 주소 복사"
              variant="contained"
              color="primary"
              startIcon={<ContentCopyIcon />}
              onClick={onCopyEmailClick}
            />

            {/* Send email button. */}
            <EmailButton
              text="이메일 보내기"
              variant="outlined"
              color="primary"
              startIcon={<SendIcon />}
              onClick={onSendEmailClick}
            />
          </EmailButtonBox>
        </EmailBox>

        {/* Information contents. */}
        <InfoBox>
          <AccessTimeIcon fontSize="small" />
          <InfoText>평균 24시간 이내 답변 (주말/공휴일 제외)</InfoText>
        </InfoBox>
      </BodyContent>

      {/* Footer contents. */}
      <Footer>
        {/* Confirm Button. */}
        <ConfirmButton
          text="확인"
          variant="contained"
          color="primary"
          onClick={onClose}
        />
      </Footer>
    </DialogWrapper>
  );
}

export default SupportDialog;
