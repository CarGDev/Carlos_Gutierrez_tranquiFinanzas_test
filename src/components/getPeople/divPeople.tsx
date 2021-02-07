import random from '../../utils/random'

const MyMocks = (props: any) => {
  const { 
    id,
    image, 
    name,
    species,
    } = props;
  const names: any = name.split(' ')
  const firstName: string = (names[0] !== undefined) ? names[0] : '' 
  const lastName: string = (names[1] !== undefined) ? names[1] : 'Desconocido' 
  const minAge: number = 18
  const age: number = random(minAge, 70)
  const votes: number = random(1, 20)

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
        <div className='peopleVotes'>{votesP}</div>
      </div>
    </div>
  );
};

export default MyMocks;