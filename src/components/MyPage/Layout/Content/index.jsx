import { ContentWrapper } from './styled';

// My Page Content Component.
function Content({ children }) {
  return <ContentWrapper component="main">{children}</ContentWrapper>;
}

export default Content;
