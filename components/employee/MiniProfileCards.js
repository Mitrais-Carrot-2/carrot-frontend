import React from "react";
import defaultImage from "@public/img/defaultImage.png";
import carrotIcon from "@public/img/mc-icon-carrot.png";
import basketIcon from "@public/img/basket.png";
import carrotIconTwo from "@public/img/mc-icon-transaction.png";
import { useSelector } from "react-redux";
import MiniCard from "./MiniCard";
import { useRouter } from "next/router";

export default function MiniProfileCards(props) {
  const router = useRouter();

  const date = new Date();
  const imgWidth = 90;
  const imgHeight = 90;

  const profilePicture = useSelector((state) =>
    state.user.userImage ? state.user.userImage : defaultImage
  );

  function profileCardBody() {
    return (
      <>
        <h3>{props.user.firstName + " " + props.user.lastName}</h3>
        <h4>
          {props.user.jobFamily} - {props.user.jobGrade}
        </h4>
      </>
    );
  }

  function basketCardBody() {
    // console.log("basket = ", props.basket)

    return (
      <>
        <h3>My {date.getFullYear()} Basket:</h3>
        <h3 id="carrot-amount-dashboard">
          {props.basket ? props.basket.carrotAmount : ""} Carrots
        </h3>
      </>
    );
  }

  function historyCardBody() {
    return (
      <>
        <h3 className="mb-2">My Carrot History</h3>
        <button
          className="m-auto w-20 btn-outline-white text-[11px] radius-5 p-1 border-1 border-white hover:bg-white hover:text-blue-800 text-center"
          onClick={() =>
            router.push({
              pathname: "/transferHistory",
              query: {
                carrotAmount: props.basket.carrotAmount,
                shareCarrot: props.basket.shareCarrot,
                rewardCarrot: props.basket.rewardCarrot,
                bazaarCarrot: props.basket.bazaarCarrot,
              },
            })
          }
        >
          View
        </button>
      </>
    );
  }

  return (
    <section>
      <div className="mx-auto my-4">
        <div className="grid grid-cols-3 gap-3 text-white mini-card">
          <MiniCard
            cardType="mini-card-profile"
            image={profilePicture}
            body={profileCardBody()}
            imgClass="cursor-pointer hover:opacity-70"
            clickAction={() => router.push("/user/profile")}
          />
          <MiniCard
            cardType="mini-card-basket"
            image={basketIcon}
            body={basketCardBody()}
          />
          <MiniCard
            cardType="mini-card-history"
            image={carrotIconTwo}
            body={historyCardBody()}
          />
        </div>
      </div>
    </section>
  );
}
