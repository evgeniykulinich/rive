import Slider from "react-slick";
import Rive from "rive-react";

export const RiveSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
  };

  const arrRivSrc = [
    "/rive/animation_mixing.riv",
    "/rive/character_rigging.riv",
    "/rive/cloud_rendering.riv",
    "/rive/inverse_kinematics.riv",
    "/rive/realtime_collaboration.riv",
    "/rive/tiny_file_sizes.riv",
  ];

  const renderRive = () =>
    arrRivSrc.map((src) => {
      return (
        <div className="item" key={src}>
          <Rive src={src} />
        </div>
      );
    });

  return (
    <div className="container">
      <Slider {...settings}>{renderRive()}</Slider>
    </div>
  );
};
