import React from "react";
import Container from "@mui/material/Container";
import ComplexCard from "../../components/ComplexCard/ComplexCard";
import { books } from "../../utility/data";

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
      {books &&
        books.map((item, index) => {
          debugger;
          return (
            <div>
              <ComplexCard
                body={item.body}
                image={item.image}
                paragraph1={item.paragraph1}
                paragraph2={item.paragraph2}
              />
            </div>
          );
        })}
    </div>
  );
}

export default OnlineServices;
