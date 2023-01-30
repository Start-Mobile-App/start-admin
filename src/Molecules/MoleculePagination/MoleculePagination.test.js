import { shallow } from 'enzyme';
import MoleculePagination from './MoleculePagination';

describe('MoleculePagination', () => {
  const onChangePagination = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MoleculePagination
        page={6}
        numberOfPages={8}
        onChangePagination={onChangePagination}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('AtomItemPagination')).toHaveLength(11);
  });
  it('onClick', () => {
    wrapper
      .find('AtomItemPagination')
      .at(0)
      .simulate('click', '1');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(1)
      .simulate('click', '2');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(2)
      .simulate('click', '3');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(3)
      .simulate('click', '4');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(4)
      .simulate('click', '5');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(5)
      .simulate('click', '6');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(6)
      .simulate('click', '7');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(7)
      .simulate('click', '8');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(8)
      .simulate('click', '9');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(9)
      .simulate('click', '10');
    expect(onChangePagination).toHaveBeenCalled();
    wrapper
      .find('AtomItemPagination')
      .at(10)
      .simulate('click', '11');
    expect(onChangePagination).toHaveBeenCalled();
  });
});
