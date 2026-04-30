'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={isActive ? "text-purple-600 font-bold" : "hover:text-purple-600"}
    >
      {children}
    </Link>
  );
};

export default NavLink; 