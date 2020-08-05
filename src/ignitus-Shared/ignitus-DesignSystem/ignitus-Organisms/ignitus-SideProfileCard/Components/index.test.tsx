import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { SideProfileCard } from './index';
import { Props } from '../types';
import * as S from '../styles';
import { Button } from '../../../ignitus-Atoms/buttons';

const props: Props = {
  name: 'Helen',
  designation: 'Student',
  trackingInformation: '10 students are tracking your progree',
};

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should rendered', () => {
  const tree = render(<SideProfileCard {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<SideProfileCard />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SideProfileCard {...props} />);
  });

  it('should render name, designation, trackingInformation correctly', () => {
    expect(wrapper.find(S.Name).text()).toEqual(props.name);
    expect(wrapper.find(S.Designation).text()).toEqual(props.designation);
    expect(wrapper.find(S.Text).text()).toEqual(props.trackingInformation);
  });

  it('should render button', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it('should render avatar', () => {
    expect(wrapper.find(S.Avatar).length).toEqual(1);
  });
});
