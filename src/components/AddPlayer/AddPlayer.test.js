import React from 'react';
import AddPlayer from './AddPlayer';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('check name', () =>{
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

    const nameInput = addPlayerComponent.find('input').first().getDOMNode();

    nameInput.value = 'Ania';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');

    expect(onPlayerAdd).toBeCalledWith('Ania');
})