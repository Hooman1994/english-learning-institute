import React, { useState } from "react";
import ComplexCard from "../../components/ComplexCard/ComplexCard";
import { shoppingItems } from "../../utility/data";
import Modal from "../../components/Modal/Modal";

function Store() {
  const [data, setData] = useState();
  const getItems = (items) => {
    setData(items);
  };

  return (
    <>
      <Modal modalStyle={{ width: "1000px", height: "500px" }} />
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
              <div>
                <ComplexCard
                  item={item}
                  getItems={getItems}
                  shoppingIcons={true}
                  favoriteIcons={true}
                  body={item.body}
                  image={item.image}
                  paragraph={item.paragraph}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Store;
