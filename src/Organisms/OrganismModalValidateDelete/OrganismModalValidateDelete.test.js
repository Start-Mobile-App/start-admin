import OrganismModalValidateDelete from './OrganismModalValidateDelete';
import { shallow } from 'enzyme';

describe('OrganismModalValidateDelete', () => {
  const setShowModalValidateDelete = jest.fn();
  const deleteFn = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismModalValidateDelete
        delete={deleteFn}
        setShowModalValidateDelete={setShowModalValidateDelete}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
  it('render  button ', () => {
    expect(wrapper.find('AtomButton')).toHaveLength(2);
  });
  it('onClick button ', () => {
    wrapper
      .find('AtomButton')
      .at(0)
      .simulate('click', '1');
    expect(setShowModalValidateDelete).toHaveBeenCalled();
    wrapper
      .find('AtomButton')
      .at(1)
      .simulate('click', '1');
    expect(deleteFn).toHaveBeenCalled();
  });
});
