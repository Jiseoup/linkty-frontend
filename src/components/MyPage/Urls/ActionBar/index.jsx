import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

import UrlDialog from '../UrlDialog';

import {
  Container,
  LeftSection,
  RightSection,
  SearchBox,
  ActionButton,
} from './styled';

function ActionBar({ searchValue, onSearchValueChange }) {
  const [isCreateUrlDialogOpen, setIsCreateUrlDialogOpen] = useState(false);

  // Create button click handler.
  const onCreateUrlDialogClick = () => {
    setIsCreateUrlDialogOpen(true);
  };

  // Create button close handler.
  const onCreateUrlDialogClose = () => {
    setIsCreateUrlDialogOpen(false);
  };

  // Remove button click handler.
  const onRemoveUrlButtonClick = () => {
    // TODO: 기능 구현 필요
    console.log('선택 URL 삭제');
  };

  return (
    <Container>
      {/* Left Section Components. */}
      <LeftSection>
        <SearchBox
          type="text"
          placeholder="URL 또는 별칭으로 검색하세요."
          value={searchValue}
          onChange={onSearchValueChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </LeftSection>

      {/* Right Section Components. */}
      <RightSection>
        {/* Create New URL Button. */}
        <ActionButton
          text="새 URL 생성"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={onCreateUrlDialogClick}
        />

        {/* Remove Selected URL Button. */}
        <ActionButton
          text="선택 URL 삭제"
          variant="contained"
          color="error"
          startIcon={<RemoveIcon />}
          onClick={onRemoveUrlButtonClick}
        />
      </RightSection>

      <UrlDialog
        isOpen={isCreateUrlDialogOpen}
        onClose={onCreateUrlDialogClose}
      />
    </Container>
  );
}

export default ActionBar;
