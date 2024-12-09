import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">Recipe Finder</Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/favorites">Favorites</Link></li>
        </ul>
      </div>
    </div>
  );
}
