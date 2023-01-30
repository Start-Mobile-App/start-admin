import { shallow } from 'enzyme';
import OrganismModalDetail from './OrganismModalDetail';

describe('OrganismModalValidateDelete', () => {
  const setShowDetailModal = jest.fn();
  const modify = jest.fn();
  let wrapper;
  const dataDetails = [
    { name: 'grope name', value: 'test group' },
    { name: 'sub-group name', value: 'test sub group' }
  ];
  beforeEach(() => {
    wrapper = shallow(
      <OrganismModalDetail
        dataDetails={dataDetails}
        showDetailModal={true}
        title={'Test'}
        SubTitle={'Groupe'}
        setShowDetailModal={setShowDetailModal}
        modify={modify}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
  it('render content ', () => {
    expect(wrapper.find('div')).toHaveLength(9);
  });
  it('onClick button ', () => {
    wrapper.find('Modal').simulate('hide');
    expect(setShowDetailModal).toHaveBeenCalled();
    wrapper
      .find('div')
      .at(8)
      .simulate('click', '1');
    expect(modify).toHaveBeenCalled();
  });
});
