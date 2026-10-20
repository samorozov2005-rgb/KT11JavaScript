import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import WhyThrive from './components/WhyThrive/WhyThrive.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Programs from './components/Programs/Programs.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import StorySection from './components/StorySection/StorySection.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="app">
      <div className="heroShell" id="home">
        <Header />
        <Hero />
      </div>
      <main>
        <WhyThrive />
        <About />
        <Services />
        <Programs />
        <Benefits />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
