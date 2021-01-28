import React from "react";
import CardStyles from "./Card.styles";
import { dateMask, ratioMask } from "./mask";

interface CardProps {
  picture?: string;
  description?: string;
  ratio?: number;
  url?: string;
  title?: string;
  date?: string;
  source?: string;
}

const Score: React.FC<CardProps> = ({
  picture,
  description,
  ratio,
  url = "",
  title,
  date,
  source,
}) => {
  //style
  const CSS = CardStyles.factory();

  return (
    <div
      style={CSS.cardContainer()}
      onClick={() => (window.location.href = url)}
    >
      <div style={CSS.cardPictureContainer()}>
        <img src={picture} alt={description} style={CSS.cardPicture()} />
      </div>
      <div style={CSS.cardContent()}>
        <div style={CSS.cardContentMain()}>{title}</div>
        <div style={CSS.cardContentFoot()}>
          <div>
            <span style={{ color: CSS.green, fontWeight: "bold" }}>
              {ratioMask(ratio)}
            </span>
            <span>
              {" "}
              | {dateMask(date)} | {source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
