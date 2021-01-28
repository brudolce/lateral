import Loading from "./Filter";
import { shallow } from 'enzyme';

describe("Loading component", () => {
  const loading = shallow(<Loading />);

  it("renders correctly", () => {
    expect(loading).toMatchSnapshot();
  });
});
