import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <Link href="/">Home</Link>
        <Link href="/testRoute">Test Route</Link>
        <Link href="/testSSRRoute">SSR Pokemons</Link>
      </ul>
    </nav>
  );
};
export default Navbar;