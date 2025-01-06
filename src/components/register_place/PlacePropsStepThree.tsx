import * as React from "react";
import { useRegisterPlace } from "./RegisterPlaceContext";
import { IPlacePropsStore } from "../../types/scrTypes";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const getPlaceFeatures = (placePropsStore: IPlacePropsStore) => {
  switch (placePropsStore.type_loc.place_type) {
    case "lodge":
      return placePropsStore.lodge;
    case "resta":
      return placePropsStore.resta;
    default:
      throw new Error("Unknown step");
  }
};

const PlacePropsStepThree = () => {
  const { placePropsStore } = useRegisterPlace();

  const placeFeatures = getPlaceFeatures(placePropsStore);

  const place = {
    ...placePropsStore.type_loc,
    ...placeFeatures,
    price_range: placeFeatures.price_range.label,
  };
  // console.log(place);

  // const keys = Object.keys(place);
  // console.log(keys);
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 18, fontWeight: 700 }}>Key</TableCell>
            <TableCell sx={{ fontSize: 18, fontWeight: 700 }}>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(place).map((key, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{key}</TableCell>
              <TableCell>{place[key as keyof typeof place]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PlacePropsStepThree;
