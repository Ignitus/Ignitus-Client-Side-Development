import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { ModalHooray } from './index';

const props = {
  title: 'Title',
  primaryText: 'primary text',
  secondaryText: 'secondary text',
  buttonText: 'button text',
};

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should render', () => {
  const tree = render(<ModalHooray {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<Modal />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ModalHooray {...props} />);
  });

  it('should render button, h1, p tags', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('p').length).toBe(2);
  });

  it('should render values passed in props properly', () => {
    expect(wrapper.find('h1').text()).toEqual(`${props.title}`);
    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).toEqual(`${props.primaryText}`);
    expect(
      wrapper
        .find('p')
        .at(1)
        .text(),
    ).toEqual(`${props.secondaryText}`);
    expect(wrapper.find('button').text()).toEqual(` ${props.buttonText}`);
  });
});
