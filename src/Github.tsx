import React from 'react';



export const Github=()=> {
  return (
    <div>
      <div>
        <input placeholder='search'/>
        <button>find</button>
      </div>
      <ul>
        {['Dima', 'Kseniya'].map(n=><li>{n}</li>)}
      </ul>
      <div>
        <h2>UserName</h2>
        <div>Details</div>
      </div>
      
    </div>
  );
}

