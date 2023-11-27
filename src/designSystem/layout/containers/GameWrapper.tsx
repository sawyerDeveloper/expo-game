import { Header } from './gameWrapper/Header';
import { Footer } from './gameWrapper/Footer';

export const GameWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
