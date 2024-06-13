import './App.css';
import Provider from './components/Provider/Provider';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import SpaceOverview from './components/SpaceOverview.jsx';
import DownLoadApp from './components/DownLoadApp.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Provider>
        <Header/>
        <HeroSection/>
        <WhyChooseUs/>
        <SpaceOverview/>
        <DownLoadApp/>
        <Footer/>
    </Provider>
  );
}

export default App;
