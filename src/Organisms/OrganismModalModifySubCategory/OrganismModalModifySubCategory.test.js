import { shallow } from 'enzyme';
import OrganismModalModifySubCategory from './OrganismModalModifySubCategory';

describe('OrganismModalEditSubCategory', () => {
  const onModifySubCategory = jest.fn();
  const onHideModalModifyCategory = jest.fn();
  const onChangeSubCategoryName = jest.fn();
  const getFile = jest.fn();
  const handleFileChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismModalModifySubCategory
        onModifySubCategory={onModifySubCategory}
        onHideModalModifyCategory={onHideModalModifyCategory}
        showModalModifyCategory={true}
        subCategory={{ name: 'test', logo: 'test' }}
        onChangeSubCategoryName={onChangeSubCategoryName}
        getFile={getFile}
        handleFileChange={handleFileChange}
        validateUpdate={false}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
  it('onHideModal icon close', () => {
    wrapper
      .find('AtomIcon')
      .at(0)
      .simulate('click');
    expect(onHideModalModifyCategory).toHaveBeenCalled();
  });
  it('onChange input', () => {
    const event = {
      preventDefault () {},
      target: { value: '123456789' }
    };
    wrapper.find('MoleculeInput').simulate('change', event);
    expect(onChangeSubCategoryName).toBeCalled();
  });
  it('click  div add sub category', () => {
    wrapper.find('AtomButton').simulate('click');
    expect(onModifySubCategory).toHaveBeenCalled();
  });
  it('open input  file', () => {
    wrapper.find('input').simulate('change');
    expect(handleFileChange).toBeCalled();
  });
  it('render image', () => {
    expect(wrapper.find('AtomImg')).toHaveLength(1);
  });
  it('render icon', () => {
    expect(wrapper.find('AtomIcon')).toHaveLength(2);
  });
  it('onclick icon', () => {
    wrapper
      .find('AtomIcon')
      .at(1)
      .simulate('click');
    expect(getFile).toBeCalled();
  });
});
