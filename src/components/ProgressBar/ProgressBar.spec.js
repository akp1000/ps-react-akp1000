import React from "react";
import ProgressBar from "./ProgressBar";
import { shallow } from "enzyme";

describe("getWidthAsPercentOfTotalWidth tests", () => {
  it("returns 0 when percent is 0 and width is 100", () => {
    const wrapper = shallow(<ProgressBar percent={0} width={100} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(0);
  });
});
