const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-900 text-white mt-10 p-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-xl mb-3">About This Page</h3>
          <p>This fan page is dedicated to the Indian Cricket Team 🇮🇳</p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Contact</h3>
          <p>📧 support@cricketfanpage.com</p>
          <p>📍 India</p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://x.com/bcci/">Twitter</a>
            <a href="https://www.facebook.com/IndianCricketTeam/">Facebook</a>
            <a href="https://www.instagram.com/indiancricketteam/?hl=en">Instagram</a>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-sm opacity-80">
        © 2025 Indian Cricket Fan Page | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
