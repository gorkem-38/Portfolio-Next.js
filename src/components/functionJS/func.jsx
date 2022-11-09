import { TypeAnimation } from 'react-type-animation';

const TypeAnimationn = () => {
    return (
      <TypeAnimation
        sequence={[
          'Front-end', 
          2000,
          'Back-end', 
          2000, 
          'Full-Stack',
          2000
        ]}
        className="h-6"
        cursor={false}
        repeat={Infinity}
      />
    );
  };

  export default TypeAnimationn;