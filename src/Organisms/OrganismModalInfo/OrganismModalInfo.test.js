import OrganismModalInfo from './OrganismModalInfo';
import { shallow } from 'enzyme';
import { getDefaultKeyBinding } from 'draft-js';

describe('OrganismModalInfo', () => {
  const closeModalInfo = jest.fn();
  let wrapper, wrapperWithoutIconDelete;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismModalInfo
        description={'Test'}
        closeModalInfo={closeModalInfo}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={'#00D98B'}
        iconName={'Reclamation'}
        showModalInfo={true}
        marginBottonIcon={'28px'}
      />
    );
    wrapperWithoutIconDelete = shallow(
      <OrganismModalInfo
        description={'Test'}
        closeModalInfo={closeModalInfo}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={false}
        colorIcon={'#00D98B'}
        iconName={'Reclamation'}
        showModalInfo={true}
        marginBottonIcon={'28px'}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
    expect(wrapperWithoutIconDelete.find('Modal')).toHaveLength(1);
  });
  it('render  button ', () => {
    expect(wrapper.find('AtomIcon')).toHaveLength(1);
    expect(wrapper.find('MoleculeIconText')).toHaveLength(1);
  });
  it('onClick button ', () => {
    wrapper.find('AtomIcon').simulate('click', '1');
    expect(closeModalInfo).toHaveBeenCalled();
  });
  it('onClick button ', () => {
    wrapper.find('Modal').simulate('hide', '1');
    expect(closeModalInfo).toHaveBeenCalled();
  });
});
