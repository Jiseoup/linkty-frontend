import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DescriptionIcon from '@mui/icons-material/Description';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import PolicyContact from '../../../components/Common/Footer/PolicyContact';
import PolicyContent from '../../../components/Common/Footer/PolicyContent';
import PolicyDescription from '../../../components/Common/Footer/PolicyDescription';
import PolicyLayout from '../../../components/Common/Footer/PolicyLayout';
import {
  TITLE,
  LAST_UPDATED,
  DESCRIPTION,
  SECTIONS,
  CONTACT_TITLE,
  CONTACT_LABEL,
} from '../../../constants/Footer/Privacy';

// Section contents icon mapper.
const ICON_MAP = {
  0: <StorageIcon />,
  1: <DescriptionIcon />,
  2: <AccessTimeIcon />,
  3: <LockIcon />,
  4: <WarningAmberIcon />,
  5: <VerifiedUserIcon />,
};

function Privacy() {
  return (
    <PolicyLayout
      title={TITLE}
      titleIcon={<SecurityIcon color="primary" />}
      lastUpdated={LAST_UPDATED}
    >
      {/* Privacy policy description component. */}
      <PolicyDescription title={TITLE} description={DESCRIPTION} />

      {/* Iterate pre-defined sections and show policy contents. */}
      {SECTIONS.map((section, index) => (
        <PolicyContent
          key={index}
          title={section.title}
          titleIcon={ICON_MAP[index]}
          contents={section.contents}
        />
      ))}

      {/* Privacy policy contact info component. */}
      <PolicyContact
        title={CONTACT_TITLE}
        titleIcon={<AdminPanelSettingsIcon sx={{ fontSize: 28 }} />}
        nameLabel={CONTACT_LABEL}
      />
    </PolicyLayout>
  );
}

export default Privacy;
