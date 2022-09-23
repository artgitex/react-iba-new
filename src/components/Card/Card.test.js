import React from "react";
import Card from "./Card";

describe("Card Testing", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((initialState) => [initialState, setState]);
  let wrapper;

  const defaultProps = {
    isEdit: false,
    tempCardData: {
      tempHeader: "title",
      tempBody: "body",
    },
  };

  beforeEach(() => {
    wrapper = shallow(<Card {...defaultProps} />);
    console.log(useStateSpy);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render Component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should call useState when onChangeMode", () => {
    wrapper.find('Actions').props().onChangeMode();
    expect(setState).toHaveBeenCalled();    
  });

  it("should call useState when onRefresh", () => {
    wrapper.find('Actions').props().onRefresh();
    expect(setState).toHaveBeenCalled();    
  });
  
  it("should call useState when onHeaderEdit", () => {
    wrapper.find('Header').props().onHeaderEdit();
    expect(setState).toHaveBeenCalled();    
  });  

  it("should call useState when onBodyEdit", () => {
    wrapper.find('Body').props().onBodyEdit();
    expect(setState).toHaveBeenCalled();    
  });
});
