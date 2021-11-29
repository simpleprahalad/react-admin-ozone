import * as React from "react";
import { List, Datagrid, ArrayField } from "react-admin";
import DivTextField from "./DivTextField";
import MuiTextField from "./MuiTextField";

export const UserList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <ArrayField>
      <Datagrid>
        <MuiTextField source="name" />
        <DivTextField source="username" label="Value" />
      </Datagrid>
    </ArrayField>
  </List>
);
