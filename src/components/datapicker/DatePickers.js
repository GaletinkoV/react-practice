import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    verticalAlign: "baseline",
  },
}));

export default function DatePickers({ label, date }) {
  
  const dateClick = (event) => {
    console.log(event.target.value);
  };

  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={dateClick}
        id="date"
        label={label}
        type="date"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
