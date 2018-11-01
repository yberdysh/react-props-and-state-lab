import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onChangeType(e){
    this.setState({filters: {...this.state.filters, type: e.target.value}})
  }

  onFindPetsClick(){
    const endpoint = this.state.filters.type === "all" ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(endpoint)
    .then(res => res.json())
    .then(pets => this.setState({pets}))
  }

  onAdoptPet(id){
    let newPets = this.state.pets.map(pet => {
      if (pet.id === id){
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    this.setState({pets: newPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
