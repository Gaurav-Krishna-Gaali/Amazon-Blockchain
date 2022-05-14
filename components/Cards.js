import React, { useContext } from "react";
import { iconTypes } from "web3uikit";
import { AmazonContext } from "../context/AmazonContext";
import Card from "./Card";

const Cards = () => {
  const { assets } = useContext(AmazonContext);
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
  console.log(assets);
  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        {assets.map((item) => {
          return <Card key={item.id} item={item.attributes} />;
        })}
        {/* <Card key={item.id} item={item.attributes} /> */}
      </div>
    </div>
  );
};

export default Cards;
