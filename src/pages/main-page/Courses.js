import React from "react";
import ComplexCard from "../../components/ComplexCard/ComplexCard";
import { levels } from "../../utility/data";

function Courses() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {levels &&
        levels.map((item, index) => {
          return (
            <div>
              <ComplexCard
                imageStyle={{width: "150px" , marginLeft: "22%"}}
                bodyStyle={{width: "280px"}}
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
export default Courses;
