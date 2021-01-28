export default class AppStyles {
  public white: string = "white";
  public black: string = "black";
  public grey: string = "#fafafa"
  public green: string = "green";
  public blue: string = "blue";
  public font: string = "Georgia,Times,Serif";

  public text(
    size: number = 1,
    colour: string = this.black,
    thick: string = "normal",
    align: string = "justify",
  ): Object {
    return {
      fontFamily: this.font,
      fontSize: `${size * 10}px`,
      textAlign: align,
      color: colour,
      fontWeight: thick,
      lineHeight: 1.6,
    };
  }

  public container(
    direction: string = "row",
    justify = "center",
    wrap = "wrap"
  ): Object {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: justify,
      flexWrap: wrap,
      flexDirection: direction,
    };
  }

  public page(): Object {
    return {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: this.white,
      ...this.container("column")
    };
  }

  public border(): Object {
    return {
      borderRadius: "25px",
      border: '1px solid #e5e5e5'
    };
  }

  static factory(): AppStyles {
    return new AppStyles();
  }
}
