import { Link } from 'gatsby';
import React from 'react';
import { rhythm } from '../utils/typography';

function Header({ siteName }: { siteName: string }): React.ReactElement {
  return (
    <div style={{ paddingTop: rhythm(1), justifyContent: 'space-between', display: 'flex', alignItems: 'baseline' }}>
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
