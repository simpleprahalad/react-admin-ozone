import React from "react";
import { useRecordContext } from "react-admin";
import get from "lodash/get";

const updatedExpiryValue = (seconds) => {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24)),
    h = Math.floor((seconds % (3600 * 24)) / 3600),
    m = Math.floor((seconds % 3600) / 60),
    s = Math.floor(seconds % 60);

  let dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
  let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

const DivTextField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  let value = get(record, source);

  // This is the place where we can modify the value of time
  // 1. Check if the record.name is "expiry"
  // 2. Convert the value into UTC time stamp, show as `days hours min sec`value
  //    We can write a helper method to do the conversion - updatedExpiryValue(value)
  // 3. Update value
  //    eg. value = updatedExpiryValue(value)

  if (record.name === "expiry") {
    value = updatedExpiryValue(value);
  }
  return <div>{value}</div>;
};

export default DivTextField;
