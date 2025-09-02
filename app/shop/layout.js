import Footer from '@/components/application/Footer';
import Header from '@/components/application/Header';

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
