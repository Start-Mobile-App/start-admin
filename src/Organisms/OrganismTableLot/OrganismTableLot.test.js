import { shallow } from 'enzyme';
import OrganismTableLot from './OrganismTableLot';

describe('OrganismTableLot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <OrganismTableLot
                listColumns={[]}
                data={[]}
                columnSort={""}
            />
        );
    });
    it('render', () => {
        expect(wrapper.find('MoleculeTable')).toHaveLength(1);
    });
})

