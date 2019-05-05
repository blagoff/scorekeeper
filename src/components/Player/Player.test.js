import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
   
    expect(playerNameRendered).toEqual(playerNamePassed);
});


it('render player score', () => {
    const playerScore = 10;
    const result = shallow(<Player score={playerScore} />);

    let scoreRender = result.find('.Player__score').text();

    scoreRender = Number(scoreRender);

    expect(scoreRender).toEqual(playerScore);

});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const plusButton = playerComponent.find('.Player__button').first();
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with 1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const minusButton = playerComponent.find('.Player__button').at(1);
  
    minusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerScoreChange  when remove button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerScoreChange} />);
  
    const removeButton = playerComponent.find('.Player__button').last();
  
    removeButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith();
});