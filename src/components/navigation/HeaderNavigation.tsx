// components/HeaderNavigation.js
import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="relative group">
          <a className="text-white">About Us</a>
          <ul className="hidden group-hover:block absolute left-0 mt-2 py-2 space-y-2 bg-white text-black">
            <li>
              <Link href="/about/mission">Mission</Link>
            </li>
            {/* Add other "About Us" subpages as needed */}
          </ul>
        </li>
        <li>
          <Link href="/worship">Worship at RMC</Link>
        </li>
        <li>
          <Link href="/activities">Activities</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
