const images = [
  "public/virat kohli.webp", ,
  "public/rohit sharma.jpg",
  "public/MSD.jpg",
  "public/bumrah.jpg ",
  "public/shreyas.jpg",
  "public/Hardik.jpg",
  "public/pant.webp",
  "public/shubhman1.jpg",
  "public/jaiswal.jpg",
  "public/test ict.webp",
  "public/ict win1.jpg",
  "public/ict win.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="max-w-full mx-auto p-6">
      <h1 className="text-4xl text-black-900 text-center mb-6">Gallery</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-128 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
