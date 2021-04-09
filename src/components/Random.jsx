import React from 'react';
import { Wave } from 'react-animated-text';



const exampleStyle = {
    display: 'inline-block',
    fontFamily: 'Yusei Magic',
    
    padding: '2.5em 1em 1em 1em',
    width: '80%',
    fontSize: '1.9rem',
    color: '#fdfd96',
  }
const Wave1 = () => (
    <div style={exampleStyle}>
      
      <Wave text="Kirby & Pals" effect="stretch" effectChange={2.0} effectDuration={.9} speed={16} iterations={1}/>

    </div>
  )
export default Wave1;