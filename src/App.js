import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import './App.css';
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import Creatures from './Creatures'
import CreatureDetails from './CreatureDetails'

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav'>Unicorn</NavLink> 
          <NavLink to='/puppies' className='nav'>Puppies</NavLink> 
          <NavLink to='/sharks' className='nav'>Sharks</NavLink> 
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/unicorns/:id' render={({ match }) => {
            const { id } = match.params
            const foundUnicorn = unicornData.find(unicorn => {
              return unicorn.id === Number(id)
            });
            return foundUnicorn && <CreatureDetails {...foundUnicorn}/>
          } 
        }
      />
      <Route exact path='/puppies/:id' render={({ match }) => {
        const { id } = match.params
        const foundPup = puppyData.find(puppy => {
          return puppy.id === Number(id)
        });
        return foundPup && <CreatureDetails {...foundPup}/>
      } 
    }
      />
      <Route exact path='/sharks/:id' render={({ match }) => {
        const { id } = match.params
        const foundShark = sharkData.find(shark => {
          return shark.id === Number(id)
        });
        return foundShark && <CreatureDetails {...foundShark}/>
      } 
    }
      />
        <Route path='/unicorns' render={() => <Creatures data={unicornData} />} />
    <Route path='/puppies' render={() => <Creatures data={puppyData}/>} />
    <Route path='/sharks' render={() => <Creatures data={sharkData} />} />
      </Switch>
      </main>
    );
  }
}
