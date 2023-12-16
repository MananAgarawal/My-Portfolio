import './index.scss'
import LogoS from '../../assets/images/mylogo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Projects from '../Projects'
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass, setletterClass] = useState('text-animate')
    const namearray = ['a','n','a','n']
    const jobarray = ['w','e','b',' ', 'd','e','v','e','l','o','p','e','r']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setletterClass('text-animate-hover');
        }, 4000);
        return () => {
          // Cleanup function to clear the timeout when the component unmounts or when the dependency changes
          clearTimeout(timeoutId);
        };
      }, []);
      
    

    return(
      <>
          <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoS} alt='logo'/>  
                <AnimatedLetters letterClass={letterClass} strArray={namearray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobarray} idx={19}/>
                </h1>
                <h2>Full stack developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
       
              <Projects/>
       
        </div>
        <Loader type="pacman" />
      </>
    );

}

export default Home;