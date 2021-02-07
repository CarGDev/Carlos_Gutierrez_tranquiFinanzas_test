import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import random from '../../utils/random'
import MyMocks from './divPeople';

import '../../assets/people.css';

import { API } from '../../utils/config'
import Votes from './votes'

const Names = () => {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    const getMyChallenges = () => {
      fetch(`${API}?page=${random(1,34)}`)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          const { results } = res;
          results.map((res: { votes: number; age: number; }, index: any) => {
            res.votes = random(1 ,20)
            res.age = random(18, 70)
          })
          setMocks(results);
        });
    };
    getMyChallenges();
  }, []);

  return (
    <div className="mocks">
      <div className='mocksMain'>
        <h1 className="myMocks">Votes</h1>
        <button>Order</button>
        <button>Desorder</button>
        <button>Per Votes</button>
        <Votes value={mocks} />
        <Link to='/' className='mocksLink'>Main Page</Link>
      </div>
      <div className='mocks-people'>
        {mocks.map((mock, index) => (
          <MyMocks key={index} {...mock} />
        ))}
      </div>
      </div>
    )
}

export default Names;
