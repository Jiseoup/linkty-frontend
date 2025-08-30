import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  minWidth: 280,
  height: theme.layout.mypage.height,
  background: theme.palette.grey[100],
  color: theme.palette.text.main,
  borderRadius: theme.spacing(1),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  overflow: 'hidden',
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 2.5),
}));

export const TitleText = styled(Typography)({
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1.6,
});

export const SidebarDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));

export const Menu = styled(List)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

export const MenuItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0),
}));

export const MenuItemButton = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(0, 1),
  borderRadius: theme.spacing(1),
  '&.Mui-selected': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const MenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 48,
  color: 'inherit',
  paddingLeft: theme.spacing(1),
}));

export const MenuItemText = styled(ListItemText)({
  fontSize: 16,
  fontWeight: 400,
});
