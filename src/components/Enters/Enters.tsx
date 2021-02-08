import React, { FC, useState } from 'react';
// import Focus from './focused'

const Enters: FC = () => {
  const [name, setValue] = useState<string>('');

  function handleChange(event:any) {
    setValue(event.target.value)
  };

  return (
    <>
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
    </>
  );
  
}

{/* <Focus />, document.getElementById('focus')
<div id="focus"></div> */}
//ReactDOM.render(<Focus />, document.getElementById('focus'));

export default Enters;
