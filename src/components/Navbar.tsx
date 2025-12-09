const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold">🇮🇳 Cricket</div>

      
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <label
        htmlFor="menu-toggle"
        className="text-3xl cursor-pointer md:static"
      >
        ☰
      </label>

      
      <ul className="absolute top-full left-0 w-full bg-blue-900 flex-col gap-4 p-4 hidden peer-checked:flex md:hidden">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
