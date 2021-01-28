import Home from "./Home";

import { shallow } from "enzyme";

import { urlFetch } from "./Home.fetch";

jest.mock("./Home.fetch", () => ({ urlFetch: jest.fn() }));
urlFetch.mockImplementation(() =>
  Promise.resolve([
    {
      author: null,
      document_id: 14367974,
      image: "test.jpg",
      published: "2018-11-06T19:20:10.000Z",
      similarity: 0.6470688581,
      source_name: "The Verge",
      source_slug: "the-verge",
      summary: "Test test test",
      thumbnail: "https://images.getnewsbot.com/14367974.jpg",
      title: "TEST",
      url: "https://www.theverge.com/2018/11/",
    },
  ])
);

describe("Home view", () => {
  it("renders correctly", () => {
    const home = shallow(<Home />);
    expect(home).toMatchSnapshot();
  });

  it("click behaviour on search", () => {
    const home = shallow(<Home />);

    home.find("Form").dive().find("#search-button").simulate("click");

    expect(home.state().suggestions).not.toEqual([""]);
  });
});
