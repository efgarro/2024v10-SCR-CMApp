import * as React from "react";
import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import { Typography, List, ListItem, ListItemIcon } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "../../css/registerPlace.module.css";

const BaseFeatures = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: name } = useController({ name: "name" });
  const { field: description } = useController({ name: "description" });
  // const { field: latitude } = useController({ name: "latitude" });
  // const { field: longitude } = useController({ name: "longitude" });

  //   console.log(errors.latitude);

  return (
    <>
      <TextField
        {...name}
        error={errors?.name ? true : false}
        label="Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        {...description}
        error={errors?.description ? true : false}
        label="Description"
        variant="outlined"
        margin="normal"
      />
      <div className={`core_flexCol core_wrapperSm`}>
        <List>
          {errors?.name && (
            <ListItem>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <Typography>{errors.name.message?.toString()}</Typography>
            </ListItem>
          )}
          {errors?.description && (
            <ListItem>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <Typography>{errors.description.message?.toString()}</Typography>
            </ListItem>
          )}
          {errors?.latitude && (
            <ListItem>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <Typography>{errors.latitude.message?.toString()}</Typography>
            </ListItem>
          )}
          {errors?.longitude && (
            <ListItem>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <Typography>{errors.longitude.message?.toString()}</Typography>
            </ListItem>
          )}
        </List>
      </div>
      {/* </div> */}
    </>
  );
};

export default BaseFeatures;
