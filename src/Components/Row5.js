import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { detailOrder } from "./data";
var _ = require("lodash");

const Row5 = (props) => {
  return (
    <div>
      <strong>Detail Order Report</strong>
      <TableContainer>
        <Table className="" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Order No</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Total Amount</TableCell>
              <TableCell align="right">Total Qty</TableCell>
              <TableCell align="right">Total Product Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {detailOrder.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.userName}</TableCell>
                <TableCell align="right">{row.orderNo}</TableCell>
                <TableCell align="right">{row.orderDate}</TableCell>
                <TableCell align="right">{row.Status}</TableCell>
                <TableCell align="right">{row.totalAmount}</TableCell>
                <TableCell align="right">{row.totalQty}</TableCell>
                <TableCell align="right">{row.totalProductCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Row5.propTypes = {};

export default Row5;
