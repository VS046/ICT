const Hero = () => {
  return (
    <div
      id="home"
      className="h-[60vh] bg-center bg-cover flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://cricketaddictor.com/images/posts/2025/Indian-Cricket-Team-Logo-BCCI-Logo.jpg?q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <h1 className="text-4xl md:text-5xl bg-black/60 px-6 py-3 rounded-full relative z-10">
        Indian Cricket Team — The Pride of India 🇮🇳
      </h1>
    </div>
  );
};

export default Hero;
