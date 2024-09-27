import * as React from "react";
import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import { Typography, List, ListItem, ListItemIcon } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "../../css/registerPlace.module.css";

const BaseProperties = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: name } = useController({ name: "name" });
  const { field: description } = useController({ name: "description" });
  const { field: latitude } = useController({ name: "latitude" });
  const { field: longitude } = useController({ name: "longitude" });

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
      <div className={`layout_flexRow ${styles.properties_podX}`}>
        <TextField
          {...latitude}
          error={errors?.latitude ? true : false}
          label="Latitude"
          variant="outlined"
          margin="normal"
        />
        {/* {errors?.latitude && <p role="alert">Error!!</p>} */}
        <TextField
          {...longitude}
          error={errors?.longitude ? true : false}
          label="Longitude"
          variant="outlined"
          margin="normal"
        />
      </div>
      {/* <div className={`${styles.properties_box}`}> */}
        <div className={`layout_flexCol ${styles.properties_wrapper}`}>
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
                <Typography>
                  {errors.description.message?.toString()}
                </Typography>
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

export default BaseProperties;
