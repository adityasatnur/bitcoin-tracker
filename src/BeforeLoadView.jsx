import React from "react";
import HomeView from "./HomeView";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const BeforeLoadView = () => {
  const [showHome, setshowHome] = useState(false);
  const clickhandler = () => {
    debugger;
    setshowHome(true);
  };
  return (
    <div>
      {!showHome ? (
        <div className="home">
          <Button
            variant="contained"
            color="primary"
            onClick={clickhandler}
            style={{ marginTop: "50vh" }}
          >
            Go to Bitcoin Tracker
          </Button>
        </div>
      ) : (
        <HomeView></HomeView>
      )}
    </div>
  );
};

export default BeforeLoadView;
