import Slider from "react-slick";
import Rive from "rive-react";

import AnimationMixing from "./rivFiles/animation_mixing.riv";
import CharacterRigging from "./rivFiles/character_rigging.riv";
import CloudRendering from "./rivFiles/cloud_rendering.riv";
import InverseKinematics from "./rivFiles/inverse_kinematics.riv";
import RealtimeCollaboration from "./rivFiles/realtime_collaboration.riv";
import TinyFileSizes from "./rivFiles/tiny_file_sizes.riv";

export const RiveSlider = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <Rive src={AnimationMixing} />
        <Rive src={CharacterRigging} />
        <Rive src={CloudRendering} />
        <Rive src={InverseKinematics} />
        <Rive src={RealtimeCollaboration} />
        <Rive src={TinyFileSizes} />
      </Slider>
    </div>
  );
};
