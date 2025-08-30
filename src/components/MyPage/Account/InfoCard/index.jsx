import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';

import {
  StyledCard,
  TitleBox,
  TitleText,
  CardDivider,
  ContentBox,
  InfoBox,
  InfoLabel,
  InfoContentBox,
  InfoTextField,
  InfoButton,
  StatsBox,
  StatsTitleBox,
  StatsTitle,
  StatsDivider,
  StatsRow,
  StatsLabel,
  StatsValue,
  StatsValuePrimary,
  StatsValueSecondary,
} from './styled';

function InfoCard() {
  return (
    <StyledCard>
      {/* Title contents. */}
      <TitleBox>
        <PersonIcon />
        <TitleText>계정 정보</TitleText>
      </TitleBox>

      {/* Card divider. */}
      <CardDivider />

      {/* Body contents. */}
      <ContentBox>
        {/* Email info contents. */}
        <InfoBox>
          <InfoLabel>이메일</InfoLabel>
          <InfoContentBox>
            <InfoTextField
              type="text"
              name="email"
              // TODO: placeholder 변경 필요할 수도 있음
              placeholder="변경할 이메일을 입력해주세요."
              value="admin@linkty.com" // TODO: 임시
              // onChange={}
              // disabled={}
            />
            <InfoButton
              text="이메일 변경"
              variant="contained"
              color="primary"
              // onClick={}
            />
          </InfoContentBox>
        </InfoBox>

        {/* User stat contents. */}
        <StatsBox>
          {/* Stats title contents. */}
          <StatsTitleBox>
            <TimelineIcon />
            <StatsTitle>통계</StatsTitle>
          </StatsTitleBox>

          {/* Stats divider. */}
          <StatsDivider />

          {/* Join date. */}
          <StatsRow>
            <StatsLabel>가입일</StatsLabel>
            {/* TODO: 임시, 포맷 생각 필요 */}
            <StatsValue>2024년 01월 01일</StatsValue>
          </StatsRow>

          {/* Last login. */}
          <StatsRow>
            <StatsLabel>마지막 로그인</StatsLabel>
            {/* TODO: 임시, 포맷 생각 필요 */}
            <StatsValue>2024년 08월 01일 오후 2시 30분</StatsValue>
          </StatsRow>

          {/* Total url count. */}
          <StatsRow>
            <StatsLabel>총 URL 개수</StatsLabel>
            {/* TODO: 임시 */}
            <StatsValuePrimary>12개</StatsValuePrimary>
          </StatsRow>

          {/* Total url click count. */}
          <StatsRow>
            <StatsLabel>총 URL 클릭 수</StatsLabel>
            {/* TODO: 임시 */}
            <StatsValueSecondary>1,234회</StatsValueSecondary>
          </StatsRow>
        </StatsBox>
      </ContentBox>
    </StyledCard>
  );
}

export default InfoCard;
