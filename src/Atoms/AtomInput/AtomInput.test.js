import { shallow } from 'enzyme';
import AtomInput from './AtomInput';

describe('Input', () => {
  const changeValue = jest.fn();
  const clickCheck = jest.fn();
  let wrapperInput,
    wrapperSelect,
    wrapperNumber,
    wrapperTextarea,
    wrapperCheckbox;
  beforeEach(() => {
    wrapperInput = shallow(
      <AtomInput
        value='test'
        as={'input'}
        placeholder={'test_place'}
        onChange={changeValue}
      />
    );
    wrapperTextarea = shallow(
      <AtomInput
        value='test'
        as={'textarea'}
        placeholder={'test_place'}
        onChange={changeValue}
      />
    );
    wrapperSelect = shallow(
      <AtomInput
        value='test'
        as={'select'}
        placeholder={'test_place'}
        onChange={changeValue}
        options={[
          <option key='1'>test1</option>,
          <option key='2'>test2</option>,
          <option key='3'>test3</option>
        ]}
      />
    );
    wrapperNumber = shallow(
      <AtomInput
        as={'number'}
        placeholder={'test_place'}
        onChange={changeValue}
      />
    );
    wrapperCheckbox = shallow(
      <AtomInput as={'checkbox'} id={12345} onClick={clickCheck} />
    );
  });

  describe('input', () => {
    it('renders a input', () => {
      expect(wrapperInput.find('FormControl')).toHaveLength(1);
    });
    it('test input placeholder', () => {
      expect(wrapperInput.find('FormControl').props().placeholder).toEqual(
        'test_place'
      );
    });
    it('test input ', () => {
      expect(wrapperInput.find('FormControl').props().onChange).toEqual(
        changeValue
      );
    });
  });

  describe('textarea', () => {
    it('renders a input', () => {
      expect(wrapperTextarea.find('FormControl')).toHaveLength(1);
    });
    it('test input placeholder', () => {
      expect(wrapperTextarea.find('FormControl').props().placeholder).toEqual(
        'test_place'
      );
    });
    it('test input ', () => {
      expect(wrapperTextarea.find('FormControl').props().onChange).toEqual(
        changeValue
      );
    });
  });

  describe('Select', () => {
    it('render', () => {
      expect(wrapperSelect.find('FormControl')).toHaveLength(1);
    });
    it(' placeholder', () => {
      expect(
        wrapperSelect
          .find('option')
          .at(0)
          .props().children
      ).toEqual('test_place');
    });
    it(' options', () => {
      expect(
        wrapperSelect
          .find('option')
          .at(1)
          .props().children
      ).toEqual('test1');
      expect(
        wrapperSelect
          .find('option')
          .at(2)
          .props().children
      ).toEqual('test2');
      expect(
        wrapperSelect
          .find('option')
          .at(3)
          .props().children
      ).toEqual('test3');
    });
  });

  describe('Number', () => {
    const event = {
      preventDefault () {},
      target: { value: 1 }
    };
    it('render', () => {
      expect(wrapperNumber.find('FormControl')).toHaveLength(1);
    });
    it('test input placeholder', () => {
      expect(wrapperNumber.find('FormControl').props().placeholder).toEqual(
        'test_place'
      );
    });
    it('onChange param ', () => {
      wrapperNumber.find('FormControl').simulate('change', event);
      expect(changeValue).toBeCalledWith(1);
    });
  });

  describe('checkbox', () => {
    it('renders ', () => {
      expect(wrapperCheckbox.find('FormCheck')).toHaveLength(1);
    });
    it('test input ', () => {
      expect(wrapperCheckbox.find('FormCheck').props().onClick).toEqual(
        clickCheck
      );
    });
  });
});
