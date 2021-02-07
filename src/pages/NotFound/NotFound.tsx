import React from 'react';
import { Link  } from 'react-router-dom';

import '../../assets/notFound.css'

const NotFound = () => (
  <div className='notFound'>
    <h1 className='notFound-h1'>404 - Not Found!</h1>
    <Link className='notFound-link' to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;
