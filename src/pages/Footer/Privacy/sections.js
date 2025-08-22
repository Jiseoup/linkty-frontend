import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionIcon from '@mui/icons-material/Description';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

// TODO: 내용 변경 필요
export const sections = [
  {
    title: '1. 수집하는 개인정보 항목',
    icon: <StorageIcon />,
    contents: [
      {
        title: '필수 항목',
        items: [
          '이메일 주소',
          '비밀번호 (암호화되어 저장)',
          '서비스 이용기록',
          '접속 로그',
          'IP 주소',
          '쿠키',
          '접속 기기정보',
        ],
      },
      {
        title: '선택항목',
        items: ['프로필 이미지', '소개글', '소셜 미디어 링크', '웹사이트 URL'],
      },
    ],
  },
  {
    title: '2. 개인정보의 수집 및 이용 목적',
    icon: <DescriptionIcon />,
    contents: [
      {
        title: '회원 관리',
        items: [
          '회원 서비스 제공에 따른 본인 식별·인증',
          '회원자격 유지·관리',
          '서비스 부정이용 방지',
          '만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인',
          '각종 고지·통지',
        ],
      },
      {
        title: '서비스 제공',
        items: ['Linkty 서비스 제공', '맞춤 서비스 제공', '본인인증'],
      },
      {
        title: '고객 서비스',
        items: [
          '고충처리',
          '민원사항 확인',
          '사고조사',
          '분쟁해결을 위한 기록보존',
          '고지사항 전달',
        ],
      },
    ],
  },
  {
    title: '3. 개인정보의 보유 및 이용 기간',
    icon: <AccessTimeIcon />,
    contents: [
      {
        title: '회원 정보',
        items: [
          '보유기간: 회원 탈퇴 시까지',
          '단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.',
        ],
      },
      {
        title: '법령에 따른 보유기간',
        items: [
          '계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)',
          '대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)',
          '소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)',
          '웹사이트 방문기록: 3개월 (통신비밀보호법)',
        ],
      },
    ],
  },
  {
    title: '4. 개인정보의 안전성 확보조치',
    icon: <LockIcon />,
    contents: [
      {
        title: '기술적 조치',
        items: [
          '개인정보 암호화 저장 및 전송',
          '해킹 등에 대비한 보안프로그램 설치',
          '접속기록의 보관 및 위변조 방지',
          '개인정보에 대한 접근 제한',
        ],
      },
      {
        title: '관리적 조치',
        items: [
          '개인정보 취급 직원의 최소화',
          '정기적인 자체 감사 실시',
          '개인정보보호 교육 실시',
        ],
      },
    ],
  },
  {
    title: '5. 개인정보의 파기 절차 및 방법',
    icon: <WarningAmberIcon />,
    contents: [
      {
        title: '파기절차',
        items: [
          '이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 파기됩니다.',
        ],
      },
      {
        title: '파기방법',
        items: [
          '전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제',
          '종이 문서: 분쇄기로 분쇄하거나 소각',
        ],
      },
    ],
  },
  {
    title: '6. 이용자의 권리와 행사 방법',
    icon: <VerifiedUserIcon />,
    contents: [
      {
        title: '이용자의 권리',
        items: [
          '개인정보 열람 요구',
          '오류 등이 있을 경우 정정 요구',
          '삭제 요구',
          '처리정지 요구',
          '개인정보 이용·제공 거부권',
        ],
      },
      {
        title: '권리 행사 방법',
        items: [
          '회원정보 관리 페이지에서 직접 열람, 정정, 삭제',
          '고객센터를 통한 서면, 전화, 이메일 요청',
          '법정대리인이나 위임받은 자를 통한 행사 가능',
        ],
      },
    ],
  },
];
