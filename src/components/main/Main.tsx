import React from 'react';
import { Link  } from 'react-router-dom';

import '../../assets/Main.css';

const Header = () => {
  return (
    <div className='Main'>
      <Link to='/lista-de-votaciones' className='votesLink'>
        <div className='link'>Go For votations</div>
      </Link>
      <Link to='/focusable-input' className='votesLink'>
        <div className='link'>Go For Enters</div>
      </Link>
    </div>
  );
};

export default Header;
