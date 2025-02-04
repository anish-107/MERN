import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;