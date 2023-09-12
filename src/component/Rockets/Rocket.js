import React from 'react';
import './Rocket.css';
import { useSelector } from 'react-redux/es/exports';
import RocketData from './RocketData';

const Rocket = () => {
  const { rockets } = useSelector((store) => store.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketData
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          descp={rocket.description}
          img={rocket.flickr_images}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rocket;
