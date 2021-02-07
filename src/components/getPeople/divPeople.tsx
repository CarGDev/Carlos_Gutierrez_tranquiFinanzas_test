import React, { useState, useEffect, ChangeEvent } from 'react';
import random from '../../utils/random'

const GetValue = (props: any) => {
  const [value, setValue] = useState(props.qty) 
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  return (
    <div className='peopleVotes'>{value}</div>
  )
}

const MyMocks = (props: any) => {
  const { 
    id,
    image, 
    name,
    species,
    votes,
    age
    } = props;
  const names: any = name.split(' ')
  const firstName: string = (names[0] !== undefined) ? names[0] : '' 
  const lastName: string = (names[1] !== undefined) ? names[1] : 'Desconocido' 

  const place: string = `Place = ${id}`
  const first: string = `Name = ${firstName}`
  const last: string = `Last name = ${lastName}`
  const ageP: string = `Age =${age}`
  const slogaP: string = `Slogan = ${species}`
  const votesP: string = `Votes = ${votes}`

  return (
    <div className='people'>
      <div className='img'>
        <img className='peopleImg' src={image} alt='people image'/>
      </div>
      <div className='contentPeople'>
        <div className="peopleId">{place}</div>
        <div className='peopleName'>{first}</div>
        <div className='peopleLName'>{last}</div>
        <div className='peopleAge'>{ageP}</div>
        <div className='peopleSlogan'>{slogaP}</div>
        <GetValue qty={votesP}/>
      </div>
    </div>
  );
};

export default MyMocks;