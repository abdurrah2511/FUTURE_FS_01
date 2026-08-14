import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './PageLayout.css';

function PageLayout({children}){
  return(
    <div className="page-layout">
      <Navbar/>
      <main className="page-content">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default PageLayout;