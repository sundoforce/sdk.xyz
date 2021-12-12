import { Link } from 'gatsby';
import React from 'react';

function Header({ siteName }: { siteName: string }): React.ReactElement {
  return (
    <div style={{justifyContent: 'space-between', display: 'flex', alignItems: 'baseline'}}>
      <Link to={'/'} style={{ fontSize: 'large', color: 'black', textDecoration: 'none' }}>
        <h3>{siteName}</h3>
      </Link>
      <Link to={'/aboutme'} style={{ fontSize: 'large', color: 'black', textDecoration: 'none' }}>
        <h4>about me</h4>
      </Link>
    </div>
  );
}

export default Header;
