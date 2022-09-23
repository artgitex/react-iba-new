import React from 'react';
import Header from "./Header";

describe('Card Header Testing', () => {
    let wrapper;

    const defaultProps = {        
        isEdit: false
    };

    beforeEach(() => {
        wrapper = shallow(<Header {...defaultProps}/>);        
    });

    it('render Component', () => {        
        expect(wrapper).toBeDefined();
    });

    it('.titleshow should exist when is not in Edit mode', () => {        
        expect(wrapper.find('.titleshow')).toHaveLength(1);
    });

    it('.titleedit should exist when is in Edit mode', () => {
        wrapper.setProps({ isEdit: true});
        expect(wrapper.find('.titleedit')).toHaveLength(1);
    });
})