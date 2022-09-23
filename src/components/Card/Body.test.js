import React from 'react';
import Body from "./Body";

describe('Card Header Testing', () => {
    let wrapper;

    const defaultProps = {        
        isEdit: false
    };

    beforeEach(() => {
        wrapper = shallow(<Body {...defaultProps}/>);
    });

    it('render Component', () => {
        expect(wrapper).toBeDefined();
    });

    it('.bodyshow should exist when is not in Edit mode', () => {        
        expect(wrapper.find('.bodyshow')).toHaveLength(1);
    });

    it('.bodyedit should exist when is in Edit mode', () => {
        wrapper.setProps({ isEdit: true});
        expect(wrapper.find('.bodyedit')).toHaveLength(1);
    });
})