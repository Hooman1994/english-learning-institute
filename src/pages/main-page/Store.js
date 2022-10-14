import React, { useState } from "react";
import ComplexCard from "../../components/ComplexCard/ComplexCard";
import { shoppingItems } from "../../utility/data";
import Modal from "../../components/Modal/Modal";

function Store() {
  const [data, setData] = useState();
  const [items, setItems] = useState([]);
  const getItems = (items) => {
    setData(items);
  };
  function handleBuy(data) {
    let newItem = [...items];
    newItem.push(data);
    setItems(newItem);
  }

  return (
    <>
      <Modal modalStyle={{ width: "1000px", height: "500px" }} data={items} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {shoppingItems &&
          shoppingItems.map((item, index) => {
            return (
              <div key={index}>
                <ComplexCard
                  item={item}
                  getItems={getItems}
                  shoppingIcons={true}
                  favoriteIcons={true}
                  body={item.body}
                  image={item.image}
                  paragraph={item.paragraph}
                  addToCard={handleBuy}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Store;
