import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BlockIcon from '@mui/icons-material/Block';
import BusinessIcon from '@mui/icons-material/Business';
import CancelIcon from '@mui/icons-material/Cancel';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GavelIcon from '@mui/icons-material/Gavel';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import PolicyContact from '../../../components/Common/Layout/Footer/PolicyContact';
import PolicyContent from '../../../components/Common/Layout/Footer/PolicyContent';
import PolicyDescription from '../../../components/Common/Layout/Footer/PolicyDescription';
import PolicyLayout from '../../../components/Common/Layout/Footer/PolicyLayout';
import {
  TITLE,
  LAST_UPDATED,
  DESCRIPTION,
  SECTIONS,
  CONTACT_TITLE,
  CONTACT_LABEL,
} from '../../../constants/Footer/Terms';

// Section contents icon mapper.
const ICON_MAP = {
  0: <ArticleIcon />,
  1: <AssignmentIcon />,
  2: <GavelIcon />,
  3: <AccountCircleIcon />,
  4: <ShoppingBagIcon />,
  5: <BlockIcon />,
  6: <CancelIcon />,
  7: <VerifiedUserIcon />,
  8: <CopyrightIcon />,
  9: <SecurityIcon />,
  10: <PaymentIcon />,
  11: <WarningAmberIcon />,
};

function Terms() {
  return (
    <PolicyLayout
      title={TITLE}
      titleIcon={<LibraryBooksIcon color="primary" />}
      lastUpdated={LAST_UPDATED}
    >
      {/* Terms of service description component. */}
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

      {/* Terms of service contact info component. */}
      <PolicyContact
        title={CONTACT_TITLE}
        titleIcon={<BusinessIcon sx={{ fontSize: 28 }} />}
        nameLabel={CONTACT_LABEL}
      />
    </PolicyLayout>
  );
}

export default Terms;
