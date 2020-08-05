import React from 'react';
import { mount, render } from 'enzyme';

import { DefaultInput } from './index';

const props = {
  placeholder: 'Placeholder',
  type: 'text',
  name: 'Input',
  handleChange: jest.fn(),
};

const input = type => `input[type="${type}"]`;

it('should rendered', () => {
  const tree = render(<DefaultInput {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<DefaultInput />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DefaultInput {...props} />);
  });

  it('should render input with defined type in prop', () => {
    expect(wrapper.find(input('text')).length).toBe(1);

    wrapper = mount(<DefaultInput {...{ ...props, type: 'password' }} />);
    expect(wrapper.find(input('password')).length).toBe(1);
  });

  it('should handle input change event properly', () => {
    wrapper
      .find(input(props.type))
      .simulate('change', { target: { value: 'value' } });

    expect(props.handleChange).toBeCalledWith('value');
  });
});
