import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import HomeStyles from "./Home.styles";
import { urlFetch } from "./Home.fetch";
import Filter from "../../components/FIlter/Filter";

class Home extends Component {
  state = {
    suggestions: [],
  };

  render() {
    const CSS = HomeStyles.factory();
    return (
      <div style={CSS.page()}>
        <Search
          action={async (inputInfo: any) =>
            this.setState({ suggestions: await urlFetch(inputInfo.searchURL) })
          }
        />
        <div style={CSS.homeDisplay()}>
          <Filter />
          {this.state.suggestions.length !== 0 ? (
            this.state.suggestions.map((el: any, i: number) => (
              <Card
                key={i}
                picture={el.image}
                url={el.url}
                title={el.title}
                ratio={el.similarity}
                date={el.published}
                source={el.source_name}
              />
            ))
          ) : (
            <div style={{ height: "80vh" }}></div>
          )}
        </div>
      </div>
    );
  }
}
// const Home: React.FC = function() {
//   //style
//   const CSS = HomeStyles.factory();
//   const [suggestions, setSuggestions] = useState([]);

//   return (
//     <div style={CSS.page()}>
//       <Search
//         action={async (inputInfo: any) => {
//           console.log(await urlFetch(inputInfo.searchURL));
//           return setSuggestions(await urlFetch(inputInfo.searchURL));
//         }}
//       />
//       <div style={CSS.homeDisplay()}>
//         <Filter />
//         {suggestions.length !== 0 ? (
//           suggestions.map((el: any, i: number) => (
//             <Card
//               key={i}
//               picture={el.image}
//               url={el.url}
//               title={el.title}
//               ratio={el.similarity}
//               date={el.published}
//               source={el.source_name}
//             />
//           ))
//         ) : (
//           <div style={{ height: "80vh" }}></div>
//         )}
//       </div>
//     </div>
//   );
// };

export default Home;
