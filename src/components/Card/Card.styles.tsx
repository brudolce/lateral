import AppStyles from "../../App.styles";

export default class ScoreStyles extends AppStyles {
  public cardContainer(): Object {
    return {
      width: "450px",
      height: "120px",
      margin: "10px",
      backgroundColor: this.white,
      cursor: 'pointer',
      ...this.container("row", "space-between"),
      ...this.border(),
    };
  }

  public cardPictureContainer(): Object {
    return {
      width: "20%",
      borderRadius: "15px 0  0 15px",
    };
  }

  public cardPicture(): Object {
    return {
      borderRadius: "15px 0  0 15px",
      height: "120px",
      width: "100%",
      objectFit: "cover",
    };
  }

  public cardContent(): Object {
    return {
      ...this.container("column", "space-around"),
    };
  }

  public cardContentMain():Object{
    return {
      margin:'10px 20px',
      width: '320px',
      height: '60%',
      ...this.text(1.6),
    }
  }

  public cardContentFoot():Object{
    return {
      margin:'10px 20px',
      width: '320px',
      height: '20%',
      ...this.text(1.5,'grey')
    }
  }

  static factory(): ScoreStyles {
    return new ScoreStyles();
  }
}
