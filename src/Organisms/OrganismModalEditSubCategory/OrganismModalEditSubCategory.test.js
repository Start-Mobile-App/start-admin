import OrganismModalEditSubCategory from './OrganismModalEditSubCategory';
import { shallow } from 'enzyme';

describe('OrganismModalEditSubCategory', () => {
  const setShowModal = jest.fn();
  const onHideModal = jest.fn();
  const openModalChangeCategorylogo = jest.fn();
  const handleFileChange = jest.fn();
  const addSubCategory = jest.fn();
  const onSaveSubCategory = jest.fn();
  const getFile = jest.fn();
  const onChangeSubCategoryValue = jest.fn();
  const listCategory = [{ _id: '123456789', name: 'test' }];
  const listSubCategory = [{ _id: '1', name: 'test' }];
  const listNewSubCategory = [{ _id: '2', name: 'test' }];
  const category = { _id: '123456789', name: 'test' };
  const subCategory = { name: 'abc', logo: 'abc', validation: true };
  const elementModify = { category: 'test', categoryLogo: 'test' };
  const submit = jest.fn();
  const onchangeSelectCategory = jest.fn();
  let wrapper, wrapperUpdate, wrapperNoImage, wrapperUpdateFile;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismModalEditSubCategory
        show={true}
        setShowModal={setShowModal}
        onHideModal={onHideModal}
        isModify={false}
        listSubCategory={listSubCategory}
        listCategory={listCategory}
        listNewSubCategory={listNewSubCategory}
        elementModify={elementModify}
        onchangeSelectCategory={onchangeSelectCategory}
        onChangeSubCategoryValue={onChangeSubCategoryValue}
        addSubCategory={addSubCategory}
        getFile={getFile}
        submit={submit}
        category={category}
        subCategory={subCategory}
        result={'test'}
        validate={true}
        handleFileChange={handleFileChange}
        onSaveSubCategory={onSaveSubCategory}
        openModalChangeCategorylogo={openModalChangeCategorylogo}
        invalidImage={{ category: false }}
      />
    );
    wrapperNoImage = shallow(
      <OrganismModalEditSubCategory
        show={true}
        setShowModal={setShowModal}
        onHideModal={onHideModal}
        isModify={false}
        listSubCategory={listSubCategory}
        listCategory={listCategory}
        listNewSubCategory={listNewSubCategory}
        elementModify={elementModify}
        onchangeSelectCategory={onchangeSelectCategory}
        onChangeSubCategoryValue={onChangeSubCategoryValue}
        addSubCategory={addSubCategory}
        getFile={getFile}
        submit={submit}
        category={category}
        subCategory={subCategory}
        result={null}
        validate={true}
        handleFileChange={handleFileChange}
        onSaveSubCategory={onSaveSubCategory}
        openModalChangeCategorylogo={openModalChangeCategorylogo}
        invalidImage={{ category: false }}
      />
    );
    wrapperUpdate = shallow(
      <OrganismModalEditSubCategory
        show={true}
        setShowModal={setShowModal}
        onHideModal={onHideModal}
        isModify={true}
        listSubCategory={listSubCategory}
        listCategory={listCategory}
        listNewSubCategory={listNewSubCategory}
        elementModify={elementModify}
        onchangeSelectCategory={onchangeSelectCategory}
        onChangeSubCategoryValue={onChangeSubCategoryValue}
        addSubCategory={addSubCategory}
        getFile={getFile}
        submit={submit}
        handleFileChange={handleFileChange}
        onSaveSubCategory={onSaveSubCategory}
        openModalChangeCategorylogo={openModalChangeCategorylogo}
        invalidImage={{ category: false }}
      />
    );
    wrapperUpdateFile = shallow(
      <OrganismModalEditSubCategory
        show={true}
        setShowModal={setShowModal}
        onHideModal={onHideModal}
        isModify={true}
        listSubCategory={listSubCategory}
        listCategory={listCategory}
        listNewSubCategory={listNewSubCategory}
        elementModify={{ name: 'test', logo: 'test' }}
        onchangeSelectCategory={onchangeSelectCategory}
        onChangeSubCategoryValue={onChangeSubCategoryValue}
        addSubCategory={addSubCategory}
        getFile={getFile}
        submit={submit}
        handleFileChange={handleFileChange}
        onSaveSubCategory={onSaveSubCategory}
        openModalChangeCategorylogo={openModalChangeCategorylogo}
        invalidImage={{ category: false }}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
    expect(wrapperUpdate.find('Modal')).toHaveLength(1);
    expect(wrapperNoImage.find('Modal')).toHaveLength(1);
  });
  it('onHideModal icon close', () => {
    wrapper
      .find('AtomIcon')
      .at(0)
      .simulate('click');
    expect(onHideModal).toHaveBeenCalled();
  });
  it('onChange input select', () => {
    const event = {
      preventDefault () {},
      target: { value: '123456789' }
    };
    wrapper
      .find('MoleculeInput')
      .at(0)
      .simulate('change', event);
    expect(onchangeSelectCategory).toBeCalled();
  });
  it('render input category', () => {
    expect(wrapperUpdate.find('AtomInput')).toHaveLength(1);
  });
  it('render molecule input', () => {
    expect(wrapper.find('MoleculeInput')).toHaveLength(4);
  });
  it('change molecule input new sub category', () => {
    const event = {
      preventDefault () {},
      target: { value: '123456789' }
    };
    wrapper
      .find('MoleculeInput')
      .at(3)
      .simulate('change', event);
    expect(onChangeSubCategoryValue).toBeCalled();
  });
  it('keypress input', () => {
    const event = {
      preventDefault () {},
      target: { value: '123456789' },
      key: 'Enter'
    };
    wrapper
      .find('MoleculeInput')
      .at(3)
      .simulate('keypress', event);
    expect(onSaveSubCategory).toBeCalled();
  });
  it('render error  msg', () => {
    expect(wrapper.find('AtomText')).toHaveLength(2);
  });
  it('button save sub category', () => {
    wrapper
      .find('AtomButton')
      .at(0)
      .simulate('click');
    expect(submit).toHaveBeenCalled();
  });
  it('open input file', () => {
    wrapperUpdateFile
      .find('input')
      .at(0)
      .simulate('change');
    expect(handleFileChange).toBeCalled();
  });
  it('click div add sub category', () => {
    wrapper
      .find('div')
      .at(5)
      .simulate('click');
    expect(addSubCategory).toHaveBeenCalled();
  });
  it('no image', () => {
    wrapperNoImage
      .find('input')
      .at(0)
      .simulate('change');
    expect(handleFileChange).toBeCalled();
  });
  it('no image', () => {
    wrapper
      .find('input')
      .at(0)
      .simulate('change');
    expect(handleFileChange).toBeCalled();
  });
  it('no image open  input  file', () => {
    wrapper
      .find('AtomIcon')
      .at(1)
      .simulate('click');
    expect(getFile).toBeCalled();
  });
  it('click div open  input  file', () => {
    wrapperNoImage
      .find('div')
      .at(2)
      .simulate('click');
    expect(getFile).toBeCalled();
  });
  it('test', () => {
    wrapperUpdate
      .find('AtomIcon')
      .at(1)
      .simulate('click');
    expect(openModalChangeCategorylogo).toBeCalled();
  });
});
