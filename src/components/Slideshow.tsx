
import "./Slideshow.css";

const Slideshow = () => {
  return (
    <div className="slideshow">
      <div
        className="slide"
        style={{
          backgroundImage:
            "url('public/BCCI.jpeg')",
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage:
            "url('public/roko.jpg')",
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage:
            "url('public/mahi2019.jpeg')",
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage:
            "url('public/rohitwinning.jpeg')",
        }}
      ></div>

      <div
        className="slide"
        style={{
          backgroundImage:
            "url('public/ict win.jpg')",
        }}
      ></div>
    </div>
  );
};

export default Slideshow;
