import { shallow } from 'enzyme';
import MoleculeInput from './MoleculeInput';

describe('MoleculeInput', () => {
  const changeValue = jest.fn();
  let wrapperInput,
    wrappperInputLabel,
    wrappperInputErrorMsg,
    wrapperSelect,
    wrapperSelectLabel,
    wrapperSelectErrorMsg,
    wrapperCheckBox,
    wrapperInputIcons;
  beforeEach(() => {
    wrapperInput = shallow(
      <MoleculeInput
        value='test'
        as={'input'}
        placeholder={'test_place'}
        onChange={changeValue}
      />
    );
    wrappperInputLabel = shallow(
      <MoleculeInput
        value='test'
        as={'input'}
        placeholder={'test_place'}
        onChange={changeValue}
        inputLabel='label'
      />
    );
    wrappperInputErrorMsg = shallow(
      <MoleculeInput
        value='test'
        as={'input'}
        placeholder={'test_place'}
        onChange={changeValue}
        ErrorMsg='message'
      />
    );
    wrapperSelect = shallow(
      <MoleculeInput
        value='test'
        as={'select'}
        placeholder={'test_place'}
        onChange={changeValue}
        options={[
          <option value='test'>test</option>,
          <option value='test2'> test2</option>
        ]}
      />
    );
    wrapperSelectLabel = shallow(
      <MoleculeInput
        value='test'
        as={'select'}
        placeholder={'test_place'}
        onChange={changeValue}
        inputLabel='label'
        options={[
          <option value='test'>test</option>,
          <option value='test2'> test2</option>
        ]}
      />
    );
    wrapperSelectErrorMsg = shallow(
      <MoleculeInput
        value='test'
        as={'select'}
        placeholder={'test_place'}
        onChange={changeValue}
        ErrorMsg='message'
        options={[
          <option value='test'>test</option>,
          <option value='test2'> test2</option>
        ]}
      />
    );
    wrapperCheckBox = shallow(
      <MoleculeInput value='test' as={'checkbox'} onClick={onclick} />
    );
    wrapperInputIcons = shallow(
      <MoleculeInput
        value='test'
        as={'input'}
        placeholder={'test_place'}
        onChange={changeValue}
        icons={['test1']}
      />
    );
  });
  it('renders a input', () => {
    expect(wrapperInput.find('AtomInput')).toHaveLength(1);
  });
  it('test molecule input placeholder', () => {
    expect(wrapperInput.find('AtomInput').props().placeholder).toEqual(
      'test_place'
    );
  });
  it('test molecule input ', () => {
    expect(wrapperInput.find('AtomInput').props().onChange).toEqual(
      changeValue
    );
  });
  describe('MoleculeInput label', () => {
    it('render', () => {
      expect(wrappperInputLabel.find('AtomInput')).toHaveLength(1);
    });
    it('placeholder', () => {
      expect(wrappperInputLabel.find('AtomInput').props().placeholder).toEqual(
        'test_place'
      );
    });
    it('test molecule input ', () => {
      expect(wrappperInputLabel.find('AtomInput').props().onChange).toEqual(
        changeValue
      );
    });
    it('render label ', () => {
      expect(wrappperInputLabel.find('AtomText').props().children).toEqual(
        'label'
      );
    });
  });
  describe('MoleculeInput ErrorMessage', () => {
    it('render', () => {
      expect(wrappperInputErrorMsg.find('AtomInput')).toHaveLength(1);
    });
    it('placeholder', () => {
      expect(
        wrappperInputErrorMsg.find('AtomInput').props().placeholder
      ).toEqual('test_place');
    });
    it('test molecule input ', () => {
      expect(wrappperInputErrorMsg.find('AtomInput').props().onChange).toEqual(
        changeValue
      );
    });
    it('render error message ', () => {
      expect(wrappperInputErrorMsg.find('AtomText').props().children).toEqual(
        'message'
      );
    });
  });
  describe('MoleculeInput Select', () => {
    it('render', () => {
      expect(wrapperSelect.find('AtomInput')).toHaveLength(1);
    });
    it('placeholder', () => {
      expect(wrapperSelect.find('AtomInput').props().placeholder).toEqual(
        'test_place'
      );
    });
    it('test molecule input ', () => {
      expect(wrapperSelect.find('AtomInput').props().onChange).toEqual(
        changeValue
      );
    });
    describe('MoleculeInput Select label', () => {
      it('render', () => {
        expect(wrapperSelectLabel.find('AtomInput')).toHaveLength(1);
      });
      it('placeholder', () => {
        expect(
          wrapperSelectLabel.find('AtomInput').props().placeholder
        ).toEqual('test_place');
      });
      it('test molecule input ', () => {
        expect(wrapperSelectLabel.find('AtomInput').props().onChange).toEqual(
          changeValue
        );
      });
      it('render label ', () => {
        expect(wrapperSelectLabel.find('AtomText').props().children).toEqual(
          'label'
        );
      });
    });
    describe('MoleculeInput Select ErrorMessage', () => {
      it('render', () => {
        expect(wrapperSelectErrorMsg.find('AtomInput')).toHaveLength(1);
      });
      it('placeholder', () => {
        expect(
          wrapperSelectErrorMsg.find('AtomInput').props().placeholder
        ).toEqual('test_place');
      });
      it('test molecule input ', () => {
        expect(
          wrapperSelectErrorMsg.find('AtomInput').props().onChange
        ).toEqual(changeValue);
      });
      it('render error message ', () => {
        expect(wrapperSelectErrorMsg.find('AtomText').props().children).toEqual(
          'message'
        );
      });
    });
  });
  describe('MoleculeUnput checkbox', () => {
    it('render', () => {
      expect(wrapperCheckBox.find('AtomInput')).toHaveLength(1);
    });
    it('test molecule input checkbox', () => {
      expect(wrapperCheckBox.find('AtomInput').props().onClick).toEqual(
        onclick
      );
    });
  });
  describe('MoleculeInput Icons', () => {
    it('render', () => {
      expect(wrapperInputIcons.find('AtomInput')).toHaveLength(1);
    });
  });
});
