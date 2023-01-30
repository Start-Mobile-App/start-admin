import { shallow } from 'enzyme';
import TemplateLot from './TemplateLot';

describe('TemplateLot', () => {
  const setSearch = jest.fn();
  const onChangePagination = jest.fn();
  const onShearch = jest.fn();
  const setShowModal = jest.fn();
  const onOpenModalSubCategory = jest.fn();
  const showModalInfoExport = jest.fn();
  const headersExport = jest.fn();
  const dataExport = jest.fn();
  const closeModalExport = jest.fn();
  let wrapper, wrapperPag, wrapperExport;
  beforeEach(() => {
    wrapper = shallow(
      <TemplateLot
        search={''}
        setSearch={setSearch}
        listColumns={[]}
        data={[]}
        columnSort={''}
        page={'1'}
        numberOfPage={'2'}
        onChangePagination={onChangePagination}
        onShearch={onShearch}
        setShowModal={setShowModal}
        onOpenModalSubCategory={onOpenModalSubCategory}
        activeBtn={false}
        showModalInfo={true}
        closeModalExport={closeModalExport}
      />
    );
    wrapperPag = shallow(
      <TemplateLot
        search={''}
        setSearch={setSearch}
        listColumns={[]}
        data={[]}
        columnSort={''}
        page={'1'}
        numberOfPage={'1'}
        onChangePagination={onChangePagination}
        onShearch={onShearch}
        setShowModal={setShowModal}
        onOpenModalSubCategory={onOpenModalSubCategory}
        activeBtn={false}
        showModalInfo={true}
      />
    );
    wrapperExport = shallow(
      <TemplateLot
        search={''}
        setSearch={setSearch}
        listColumns={[]}
        data={[]}
        columnSort={''}
        page={'1'}
        numberOfPage={'1'}
        onChangePagination={onChangePagination}
        onShearch={onShearch}
        setShowModal={setShowModal}
        onOpenModalSubCategory={onOpenModalSubCategory}
        activeBtn={true}
        showModalInfoExport={showModalInfoExport}
        headersExport={headersExport}
        dataExport={dataExport}
        showModalInfo={true}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapperPag.find('div')).toHaveLength(1);
    expect(wrapperExport.find('div')).toHaveLength(2);
  });
  it('Organism Header', () => {
    expect(wrapper.find('OrganismHeader')).toHaveLength(1);
  });
  it('Organism table lot', () => {
    expect(wrapper.find('OrganismTableLot')).toHaveLength(1);
  });
  it('Molecule input', () => {
    expect(wrapper.find('MoleculeInput')).toHaveLength(1);
  });
  it('Atom button', () => {
    expect(wrapper.find('AtomButton')).toHaveLength(3);
    expect(wrapperExport.find('AtomButton')).toHaveLength(2);
  });
  it('input  search placeholder', () => {
    expect(wrapper.find('MoleculeInput').props().placeholder).toEqual(
      'Recherche'
    );
  });
  it('input  search containerClassname', () => {
    expect(wrapper.find('MoleculeInput').props().containerClassname).toEqual(
      'container_input_search'
    );
  });
  it('onChange input search', () => {
    const event = {
      preventDefault() { },
      target: { value: 'test' }
    };
    wrapper.find('MoleculeInput').simulate('change', event);
    expect(setSearch).toBeCalledWith('test');
  });
  it('onKeyPress input search', () => {
    wrapper.find('MoleculeInput').simulate('keypress', { key: 'Enter' });
    expect(setSearch);
  });
  it('Molecule pagination', () => {
    expect(wrapper.find('MoleculePagination')).toHaveLength(1);
  });
  it('Molecule pagination  page', () => {
    expect(wrapper.find('MoleculePagination').props().page).toEqual('1');
  });
  it('Molecule pagination  numberOfPages', () => {
    expect(wrapper.find('MoleculePagination').props().numberOfPages).toEqual(
      '2'
    );
  });
  it('Molecule pagination  onChangePagination', () => {
    expect(
      wrapper.find('MoleculePagination').props().onChangePagination
    ).toEqual(onChangePagination);
  });
  it('Molecule pagination  numberOfPages 3', () => {
    expect(
      wrapper.find('MoleculePagination').props().onChangePagination
    ).toEqual(onChangePagination);
  });
  it('click download excel', () => {
    wrapperExport.find('div').at(1) .simulate('click', 'true')
    expect(showModalInfoExport).toHaveBeenCalled();
  });
  it('open  modal  sub catgory', () => {
    wrapper.find('AtomButton').at(2) .simulate('click', 'true')
    expect(onOpenModalSubCategory).toHaveBeenCalled();
  });
  it('ModalInfoOrganism', () => {
    expect(wrapper.find('OrganismModalInfo')).toHaveLength(1);
    expect(wrapper.find('OrganismModalInfo').props().closeModalInfo).toEqual(closeModalExport);

  });
});
