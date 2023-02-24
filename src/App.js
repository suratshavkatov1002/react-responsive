
import './App.css';
import { useEffect, useState, } from 'react';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/UI/About/About';
import Blog from './components/UI/Blog/Blog';
import Counter from './components/UI/Counter/Counter';
import Hero from './components/UI/Hero/Hero'
import Services from './components/UI/Services/Services';
import Team from './components/UI/Team/Team';
import Testimonial from './components/UI/Testimonial/Testimonial';
import Newsletter from './components/UI/Newsleter/Newsletter';



function App() {

    const [theme, setTheme] = useState('')

    const toogleTheme = () => {
        theme === '' ? setTheme('light-theme') : setTheme('')
    }

    useEffect(() => {
        document.body.classList = theme
    }, [theme])

    return (
       <>
            <Header  theme = {theme}  toogleTheme = {toogleTheme} />
            <Hero theme = {theme} />
            <Counter/>
            <Services/>
            <About/>
            <Team/>
            <Blog/>
            <Testimonial/>
            <Newsletter/>
            <Footer/>
       </>
    );
}

export default App;
