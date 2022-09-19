import React from "react";
import Container from "@mui/material/Container";
import inProgress from "../../assets/images/in_progress.gif";

function TTC() {
  return (
    <Container
      style={{
        marginTop: "100px",
        left: "30%",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "6px",
        fontWeight: "bold",
        width: "40%",
        height: "40%",
        padding: "20px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      maxWidth="xl"
    >
      <div>
        <h1>این صفحه در حال پیاده سازی است...</h1>
        <img src={inProgress} atl="in-progress"></img>
      </div>
    </Container>
  );
}

export default TTC;
