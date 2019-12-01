import React from "react";
import Select from "@material-ui/core/Select";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const BitcoinView = props => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 180
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  return (
    <div>
      <h1>{props.currencyValue}</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">Select Currency</InputLabel>
        <Select
          labelId="select-label"
          // value={age}
          onChange={props.currencyChange}
        >
          {Object.keys(props.coindata).map(key => {
            return (
              <MenuItem key={key} value={props.coindata[key].last}>
                {key.slice(3, 6)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default BitcoinView;
