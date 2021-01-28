import AppStyles from "../../App.styles";

export default class SearchStyles extends AppStyles {

  public searchContainer():Object {
    return {
      width: '500px',
      margin: '20px',
      ...this.container(),

    }
  }  
  public input(): Object{
    return {
      width:'300px',
      height: '30px',
      margin:'10px',
    ...this.border()
    }
  }

  public submit(): Object{
    return {
      background: this.blue,
      ...this.border(),
      height: '30px',
      width:'100px',
      color: this.grey

    }
  }

  static factory(): SearchStyles {
    return new SearchStyles();
  }
}
