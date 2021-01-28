import AppStyles from "../../App.styles";

export default class FilterStyles extends AppStyles {
  public filterContainer(): Object {
    return {
      width: '100%',
      ...this.container('row','space-between'),
      ...this.text(2)
    };
  }

  public filterInner():Object {
    return {
      margin: '10px'
    }
  }

  public filterMidOptions(): Object {
    return {
      width: '75%',
      ...this.container('row','space-between'),
      ...this.text(2)
    };
  }

  static factory(): FilterStyles {
    return new FilterStyles();
  }
}
