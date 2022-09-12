import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(day, time1, time2, time3, time4, time5, time6) {
  return { day, time1, time2, time3, time4, time5, time6 };
}

const rows = [
  createData(
    "شنبه",
    "16:15 - 17:45 Class A1",
    "18:00 - 19:30 Class A2",
    "18:00 - 19:30 Class A3",
    "19:45 - 21:15 Class A4",
    "19:30 - 21:00 Class A5",
    "19:45 - 21:15 Class A6"
  ),
  createData(
    "یکشنبه",
    "16:15 - 17:45 Class B1",
    "18:00 - 19:30 Class B2",
    "18:00 - 19:30 Class B3",
    "19:45 - 21:15 Class B4",
    "19:30 - 21:00 Class B5",
    "19:45 - 21:15 Class B6"
  ),
  createData(
    "دوشنبه",
    "16:15 - 17:45 Class A1",
    "18:00 - 19:30 Class A2",
    "18:00 - 19:30 Class A3",
    "19:45 - 21:15 Class A4",
    "19:30 - 21:00 Class A5",
    "19:45 - 21:15 Class A6"
  ),
  createData(
    "سه شنبه",
    "16:15 - 17:45 Class B1",
    "18:00 - 19:30 Class B2",
    "18:00 - 19:30 Class B3",
    "19:45 - 21:15 Class B4",
    "19:30 - 21:00 Class B5",
    "19:45 - 21:15 Class B6"
  ),
  createData(
    "چهارشنبه",
    "16:15 - 17:45 Class A1",
    "18:00 - 19:30 Class A2",
    "18:00 - 19:30 Class A3",
    "19:45 - 21:15 Class A4",
    "19:30 - 21:00 Class A5",
    "19:45 - 21:15 Class A6"
  ),
  createData(
    "پنجشنبه",
    "16:15 - 17:45 Class B1",
    "18:00 - 19:30 Class B2",
    "18:00 - 19:30 Class B3",
    "19:45 - 21:15 Class B4",
    "19:30 - 21:00 Class B5",
    "19:45 - 21:15 Class B6"
  ),
  createData(
    "جمعه",
    "--------------",
    "--------------",
    "--------------",
    "--------------",
    "10:30 - 13 Class A5",
    "11:00 - 14:30 Class A6"
  ),
];

export default function CustomizedTables() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: "15rem",
        left: "12rem",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        width: "80%",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                  backgroundColor: "#0300a6",
                }}
                align="center"
              >
                روزهای هفته
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                }}
                align="center"
              >
                Beginner/Elementary مقطع{" "}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                  backgroundColor: "#0300a6",
                }}
                align="center"
              >
                Pre Intermediate مقطع
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                }}
                align="center"
              >
                Intermediate مقطع
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                  backgroundColor: "#0300a6",
                }}
                align="center"
              >
                Upper Intermediate مقطع
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                }}
                align="center"
              >
                Advanced مقطع
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontFamily: "IRANsans",
                  backgroundColor: "#0300a6",
                }}
                align="center"
              >
                Proficient مقطع
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.day}>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.day}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                >
                  {row.time1}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                >
                  {row.time2}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                >
                  {row.time3}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                >
                  {row.time4}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                >
                  {row.time5}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "22px",
                    fontFamily: "IRANsans",
                  }}
                  align="center"
                >
                  {row.time6}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
