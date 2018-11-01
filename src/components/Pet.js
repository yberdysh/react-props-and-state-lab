import React from 'react'

const Pet = ({onAdoptPet, petInfo}) => {
  console.log("pet", petInfo)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {petInfo.gender === "male" ? "♂" : "♀"}
            {petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {petInfo.age}</p>
            <p>Weight: {petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {petInfo.isAdopted ? <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() =>onAdoptPet(petInfo.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }

export default Pet
