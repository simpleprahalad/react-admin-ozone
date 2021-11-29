import React from "react";
import { useRecordContext } from "react-admin";
import get from "lodash/get";
import { TextField } from "@material-ui/core";

const MuiTextField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  const value = get(record, source);

  return <TextField value={value} InputProps={{ disableUnderline: true }} />;
};

export default MuiTextField;
