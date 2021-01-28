import Card from "./Card";
import { shallow } from 'enzyme';
import { dateMask, ratioMask } from "./mask";

describe("Card component", () => {
  const card = shallow(<Card />);
  
  it("renders correctly", () => {
    expect(card).toMatchSnapshot();
  });
  
  it("ratioMask works propperly", () => {
    expect(ratioMask(0.972)).toBe("97% similar");
  });
  
  it("dateMask works propperly", () => {
    expect(dateMask("2015-02-18T14:30:02.000Z")).toBe("18.Feb.15");
  });
});

