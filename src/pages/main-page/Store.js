import React from "react";
import ComplexCard from "../../components/ComplexCard/ComplexCard";
import { shoppingItems } from "../../utility/data";

function Store() {
  return (
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
          debugger;
          return (
            <div>
              <ComplexCard
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
  );
}

export default Store;
