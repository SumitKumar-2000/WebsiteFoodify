import { useState } from 'react';
import AboutUs from './components/aboutus';
import Footer from './components/Footer';
import Header from './components/header';
import NavBar from './components/navbr';
import ScrollToTop from './components/scrollToTop';
import Service from './components/service';
// import UserPreview from './components/userpreview';


function App() {

  const [scrollToTopButton, setScrollToTopButton] = useState(false)
  
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
        setScrollToTopButton(true)
    }else{
        setScrollToTopButton(false)
    }
  })

  return (
    <div>      
      {scrollToTopButton === false && <NavBar/>}
      <div>
        <Header/>
        <Service/>
        <AboutUs/>
        <Footer/>
      </div>
        { scrollToTopButton && <ScrollToTop setScrollToTopButton={setScrollToTopButton}/>}
    </div>
  );
}

export default App