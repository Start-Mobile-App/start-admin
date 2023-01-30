import { shallow } from 'enzyme';
import TemplateLogin from './TemplateLogin';

describe('TemplateLogin', () => {
  const onChangeEmail = jest.fn();
  const onChangePassword = jest.fn();
  const login = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TemplateLogin
        Login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('div')).toHaveLength(3);
  });
});
