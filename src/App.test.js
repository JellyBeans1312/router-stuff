import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter} from 'react-router-dom';
import App from './App.js';
import Creatures from './Creatures.js';
import CreatureDetails from './CreatureDetails.js';
import Home from './Home.js';


describe('Route', () => {
  it('should route to the home page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should route to /unicorns ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/unicorns']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should route to /puppies ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/puppies']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should route to /sharks ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sharks']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should not render a component if user is dumb', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(0);
  });

  it('should show a specific creature based on id', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/unicorns/5']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(CreatureDetails)).toHaveLength(1);
  });
});