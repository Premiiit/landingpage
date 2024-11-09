import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <section id='hero' className=''>
      {/* Flex Container */}
      <div className='container bg-black flex flex-col-reverse items-center pb-3 mx-auto space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <Spline scene="https://prod.spline.design/mjlr8FD77J4yN-2l/scene.splinecode" />

        {/* Image */}
        
      </div>
    </section>
  );
};

export default Hero;
