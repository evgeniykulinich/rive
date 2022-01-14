import Slider from "react-slick";
import Rive from "rive-react";

export const RiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <Rive src="1_-_team.riv" />
        <Rive src="2_-_files.riv" />
        <Rive src="5_-_knight.riv" />
        <Rive src="example__tom_morello.riv" />
        <Rive src="new_file.riv" />
        <Rive src="skills_demo.riv" />
      </Slider>
    </div>
  );
};
