import OrganismModalCropImage from './OrganismModalCropImage';
import { shallow } from 'enzyme';

describe('OrganismModalCropImage', () => {
  const getCroppedImg = jest.fn();
  const onHide = jest.fn();
  const submit = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismModalCropImage
        show={true}
        onHide={onHide}
        getCroppedImg={getCroppedImg}
        src={'test'}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
  it('render  button ', () => {
    expect(wrapper.find('AtomButton')).toHaveLength(1);
  });
  it('render crop image ', () => {
    expect(wrapper.find('Cropper')).toHaveLength(1);
  });
});
