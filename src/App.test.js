import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
        name: 'Antoś',
        score: 0
    }
]

appComponent.setState({players});

const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

onScoreUpdate(0, 5);

const playersAfterUpdate = appComponent.state().players;

const playerScore = playersAfterUpdate[0].score;

expect(playerScore).toEqual(5);

});

it('add user', () => {
  const appComponent = shallow(<App />);

  const players = []; 
  
  appComponent.setState({ players });
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Przemek');

  const playersState = appComponent.state('players');

  //expect(players.length).toEqual(1);
  expect(playersState [0].name).toEqual('Przemek');
  //expect(players[0].score).toEqual(0);
});

it('delete user', () =>{
  const appComponent = shallow(<App />);

  const players = [
    {
        name: 'Antoś',
        score: 0
    }
]

  appComponent.setState({ players });

  const onPlayerDelete = appComponent.find(PlayersList).prop('onPlayerRemove');

  onPlayerDelete(0);

  const playerDelete = appComponent.state('players');

  expect(playerDelete).toEqual([]);
})