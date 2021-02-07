import React, { useState, useEffect } from 'react';
import random from '../../utils/random'
import MyMocks from './divPeople';
import './people.css';
import { API } from '../../utils/config'

const Names = () => {
  const [mocks, setMocks] = useState([]);

  useEffect(() => {
    const getMyChallenges = () => {
      fetch(`${API}?page=${random(1,34)}`)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          const { results } = res;
          console.log('Mocks', results);
          setMocks(results);
        });
    };
    getMyChallenges();
  }, []);

  return (
    <div className="mocks">
      <h1 className="myMocks">Votes</h1>
      <div className='mocks-people'>
        {mocks.map((mock, index) => (
          <MyMocks key={index} {...mock} />
        ))}
      </div>
      </div>
    )
}

export default Names;
