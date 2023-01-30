import { shallow } from 'enzyme';
import OrganismLogin from './OrganismLogin';

describe('OrganismTemplate', () => {
  const onChangeEmail = jest.fn();
  const onChangePassword = jest.fn();
  const login = jest.fn();
  const setChecked = jest.fn();

  const isInvalid = { email: false, password: false, checked: false };
  const checked = false;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismLogin
        Login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        isInvalidEmail={isInvalid.email}
        isInvalidPassword={isInvalid.password}
        setChecked={setChecked}
        checked={checked}
        isInvalidChecked={isInvalid.checked}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  describe('input', () => {
    it('input email', () => {
      const event = {
        preventDefault () {},
        target: { value: 'test@gmail.com' }
      };
      wrapper
        .find('MoleculeInput')
        .at(0)
        .simulate('change', event);
      expect(onChangeEmail).toBeCalledWith('test@gmail.com');
    });
    it('input pwd', () => {
      const event = {
        preventDefault () {},
        target: { value: 'test' }
      };
      wrapper
        .find('MoleculeInput')
        .at(1)
        .simulate('change', event);
      expect(onChangePassword).toBeCalledWith('test');
    });
  });
  describe('check', () => {
    it('check', () => {
      wrapper
        .find('MoleculeInput')
        .at(2)
        .simulate('click', 'true');
      expect(setChecked).toHaveBeenCalled();
    });
  });
});
