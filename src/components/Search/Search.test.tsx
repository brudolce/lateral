import Form from "./Search";
import { shallow } from 'enzyme';

describe("Form component", () => {
  const form = shallow(<Form question="test" />);

  it("renders correctly", () => {
    expect(form).toMatchSnapshot();
  });
});
