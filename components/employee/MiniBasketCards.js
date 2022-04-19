import React from "react";
import defaultImage from "@public/img/defaultImage.png";
import carrotIcon from "@public/img/mc-icon-carrot.png";
import { useSelector } from "react-redux";
import MiniCard from "./MiniCard";

export default function MiniBasketCards(props) {
  const date = new Date();
  const imgWidth = 90;
  const imgHeight = 90;

  const profilePicture = useSelector((state) =>
    state.user.userImage ? state.user.userImage : defaultImage
  );

  function carrotCardBody(typeTxt, carrot) {
    let carrotTxt = "";

    if (props.basket) {
      if (carrot > 0) carrotTxt = `+${carrot}`;
      else carrotTxt = carrot;
    } else carrotTxt = "";

    return (
      <>
        <p className="font-bold uppercase text-[12px]">{typeTxt}</p>
        <h2>{carrotTxt} Carrots</h2>
      </>
    );
  }

  return (
    <section>
      <div className="mx-auto my-4">
        <div className="grid grid-cols-3 gap-3 text-white mini-card">
          <MiniCard
            cardType="mini-card-reward"
            image={carrotIcon}
            body={carrotCardBody("reward", props.basket.rewardCarrot)}
          />
          <MiniCard
            cardType="mini-card-shared"
            image={carrotIcon}
            body={carrotCardBody("share", props.basket.shareCarrot)}
          />
          <MiniCard
            cardType="mini-card-bazaar"
            image={carrotIcon}
            body={carrotCardBody("bazaar", props.basket.bazaarCarrot)}
          />
        </div>
      </div>
    </section>
  );
}
