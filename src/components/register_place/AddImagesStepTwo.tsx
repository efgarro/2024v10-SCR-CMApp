import * as React from "react";

import { Paper, Typography, Button } from "@mui/material";

import styles from "../../css/registerPlace.module.css";
import UppyUploader from "./UppyUploader";

const AddImagesStepTwo = () => {
  return (
    <div className={`${styles.registerPlace_box}`}>
      <Paper
        className="core_flexCol"
        sx={{
          justifyContent: "center",
          mb: "2rem",
          height: 50,
          background: "#a4539935",
        }}
        square
        elevation={0}
      >
        <Typography sx={{ pl: "2rem" }} variant="h6">
          Add Images
        </Typography>
      </Paper>
      <div className={`core_flexRow ${styles.typeLoc_box}`}>ADD IMAGES</div>
      <UppyUploader />
      <Paper
        className="core_flexCol"
        sx={{
          justifyContent: "center",
          mb: "2rem",
          height: 50,
          background: "#a4539935",
        }}
        square
        elevation={0}
      >
        <Typography sx={{ pl: "2rem" }} variant="h6">
          Sort Images
        </Typography>
      </Paper>
      <div className={`core_flexRow ${styles.typeLoc_box}`}>SORT IMAGES</div>

      <div className={`${styles.properties_box}`}>
        <div className={`core_flexCol core_wrapperSm`}>
          <Button
            type="submit"
            // color="#F000D0"
            // disabled={
            //   (isOnNextStep ? true : false) ||
            //   _.isEqual(watchType, placePropsStore.type_loc)
            //     ? true
            //     : false
            // }
            // disabled={!_.isEqual(watchTypeLoc, placePropsStore.type_loc)}
            variant="outlined"
            sx={{
              color: "F000D0",
              // background: "#a4539935",
              my: "1rem",
            }}
          >
            Save Type & Location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddImagesStepTwo;
