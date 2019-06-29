import React from 'react';
import FoaasCard from '../../index';

function Samples() {
  const stylesParent = {
    padding: '.5rem',
    margin: '1 1 1 1',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'space-between',
  };

  const stylesChildren = {
    padding: '1rem',
    margin: '.5 .5 .5 .5',
  };

  const arr = ['asshole', 'awesome', 'family', 'fascinating', 'cup', 'everyone'];
  const randBool = () => Math.random() >= 0.5;

  return (
    <div style={stylesParent} className="samples">
      {
        arr.map(item => (
          <div key={item} style={stylesChildren}>
            <FoaasCard
              classes={false}
              middleFinger={randBool()}
              darkMode={randBool()}
              type={item}
              from="Some asshole"
            />
          </div>
        ))
      }
    </div>
  );
}

export default Samples;
