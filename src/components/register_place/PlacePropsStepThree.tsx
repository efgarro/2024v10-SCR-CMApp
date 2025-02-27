import * as React from "react";
import { v7 as uuidv7 } from "uuid";
import { useRegisterPlace } from "./RegisterPlaceContext";
import { IPlacePropsStore, IPriceSelect } from "../../types/scrTypes";

import { useAddPlace } from "../../apiRequests/apiFns";
import { flattenObject } from "../../utils/flattenObj";

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
  const addPlace = useAddPlace()

  const placeFeatures = getPlaceFeatures(placePropsStore);

  const placeSummary = flattenObject({
    place_id: uuidv7(),
    ...placePropsStore.type_loc,
    ...placeFeatures,
    // price_range: placeFeatures.price_range.label,
  });
  // console.log(placeSummary);

  // const keys = Object.keys(placeSummary);
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
          {Object.keys(placeSummary).map((key, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{key}</TableCell>
              <TableCell>
                {placeSummary[key as keyof typeof placeSummary]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={() => addPlace.mutate(placeSummary)}>Save to Cloud DB</button>
    </>
  );
};

export default PlacePropsStepThree;
