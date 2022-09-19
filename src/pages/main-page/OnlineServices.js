import React from "react";
import ComplexCard from "../../components/ComplexCard/ComplexCard";
import { onlineOptions } from "../../utility/data";

function OnlineServices() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {onlineOptions &&
        onlineOptions.map((item, index) => {
          debugger;
          return (
            <div>
              <ComplexCard
                paragraphStyle={{ width: "250px", direction: "rtl"}}
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

export default OnlineServices;
