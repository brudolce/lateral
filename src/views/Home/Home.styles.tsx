import AppStyles from "../../App.styles";

export default class HomeStyles extends AppStyles {

  public homeDisplay():Object {
    return {
      ...this.container('column'),
      margin:'10px',
      width:'500px',
      backgroundColor: this.grey
    }
  }

  static factory(): HomeStyles {
    return new HomeStyles();
  }
}
