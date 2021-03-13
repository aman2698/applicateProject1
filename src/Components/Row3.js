import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { order } from "./data";

var _ = require("lodash");
const Row3 = (props) => {
  var top = _.sortBy(order, "totalAmount")
  var bottom = _.sortBy(order, "totalAmount").reverse();;

  return (
    <div>
      <strong>Top 5 Order</strong>
    
      <TableContainer>
        <Table className="" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Order No</TableCell>
              <TableCell align="right">Total Amount</TableCell>
              <TableCell align="right">Total Quantity</TableCell>
              <TableCell align="right">User Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bottom.slice(0, 5).map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.orderNo}</TableCell>
                <TableCell align="right">{row.totalAmount}</TableCell>
                <TableCell align="right">{row.totalQuantity}</TableCell>
                <TableCell align="right">{row.userName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
      </TableContainer>
      
      <div>
        <strong>Bottom 5 Order</strong>
        <TableContainer>
          <Table className="" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Order No</TableCell>
                <TableCell align="right">Total Amount</TableCell>
                <TableCell align="right">Total Quantity</TableCell>
                <TableCell align="right">User Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {top.slice(0, 5).map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="right">{row.orderNo}</TableCell>
                  <TableCell align="right">{row.totalAmount}</TableCell>
                  <TableCell align="right">{row.totalQuantity}</TableCell>
                  <TableCell align="right">{row.userName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

Row3.propTypes = {};

export default Row3;
