import { shallow } from 'enzyme';
import OrganismTableUser from './OrganismTableUser';

describe('OrganismTableUser', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <OrganismTableUser
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

