import { useNavigate } from 'react-router-dom';

import { StyledRowBox, StyledButton } from './styled';

// Error Page Navigate Buttons Component.
function ButtonGroup({ customText, customOnClick }) {
  const navigate = useNavigate();

  // Go home button click handler.
  const onGoHomeClick = () => {
    navigate('/');
  };

  // Go back button click handler.
  const onGoBackClick = () => {
    navigate(-1);
  };

  return (
    <StyledRowBox>
      {/* Go Home Button Component. */}
      <StyledButton
        text="홈으로 돌아가기"
        variant="contained"
        onClick={onGoHomeClick}
      />

      {/* Go Back Button Component. */}
      <StyledButton
        text={customText ? customText : '이전 페이지로'}
        variant="outlined"
        onClick={customOnClick ? customOnClick : onGoBackClick}
      />
    </StyledRowBox>
  );
}

export default ButtonGroup;
