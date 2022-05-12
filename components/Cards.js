import React from "react";
import { AmazonContext } from "../context/AmazonContext";
import Card from "./Card";

const Cards = () => {
  const item = {
    id: 0,
    attributes: {
      name: "Doge",
      price: 2,
      src: "https://media4.giphy.com/media/jJB6GOY0sh4Iv2tRSV/200w.webp?cid=ecf05e4706wgt33mn8l2l1w8ioh08didxstoqepyrwtny73g&rid=200w.webp&ct=g",
    },
  };
  const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.cards}>New Release</div>
        <div className={styles.cards}>
          <Card key={item.id} item={item.attributes} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
