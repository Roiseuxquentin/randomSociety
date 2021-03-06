import React, {Component} from 'react';

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

const SocietyBoard = ({name,address, display}) => {

  if (display) {
    return ( 
      <div className='society' >
        <h1 className="societyName">{name}</h1> 
        <p className="societyAddress" >{address}</p> 
      </div> )
  } else {
    return <div />
  }
}

export default SocietyBoard