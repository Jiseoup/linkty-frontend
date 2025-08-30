import BarChartIcon from '@mui/icons-material/BarChart';
import LinkIcon from '@mui/icons-material/Link';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { Link, useLocation } from 'react-router-dom';

import { MENUS } from '../../../constants/MyPage/Sidebar';

import {
  SidebarWrapper,
  TitleBox,
  TitleText,
  SidebarDivider,
  Menu,
  MenuItem,
  MenuItemButton,
  MenuItemIcon,
  MenuItemText,
} from './styled';

// Menus icon mapper.
const ICON_MAP = {
  0: <SpaceDashboardIcon />,
  1: <LinkIcon />,
  2: <BarChartIcon />,
  3: <SettingsIcon />,
};

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <SidebarWrapper>
      {/* Title contents. */}
      <TitleBox>
        <PersonIcon />
        <TitleText noWrap>마이페이지</TitleText>
      </TitleBox>

      {/* Sidebar divider. */}
      <SidebarDivider />

      <Menu>
        {/* Iterate pre-defined menus and show it. */}
        {MENUS.map((menu, index) => (
          <MenuItem key={index}>
            <MenuItemButton
              component={Link}
              to={menu.path}
              selected={pathname === menu.path}
            >
              <MenuItemIcon>{ICON_MAP[index]}</MenuItemIcon>
              <MenuItemText primary={menu.title} />
            </MenuItemButton>
          </MenuItem>
        ))}
      </Menu>
    </SidebarWrapper>
  );
}

export default Sidebar;
