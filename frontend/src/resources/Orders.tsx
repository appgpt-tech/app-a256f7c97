//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const OrdersTitle = () => {
  const record = useRecordContext();
  return <span>Orders {record ? `"${record.OrderID}"` : ''}</span>;
};

export const OrdersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="OrderID" />
      <ReferenceField source="UserID" reference="Users" />
      <ReferenceField source="RestaurantID" reference="Restaurants" />
      <ReferenceField source="ItemsOrdered" reference="Menus" />
      <NumberField source="TotalPrice" />
      <TextField source="OrderStatus" />
      <TextField source="DeliveryAddress" />
      <DateField source="OrderDateTime" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const OrdersEdit = () => (
  <Edit title={<OrdersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="OrderID" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="UserID" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="RestaurantID" reference="Restaurants" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="ItemsOrdered" reference="Menus" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="TotalPrice" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="OrderStatus" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="DeliveryAddress" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="OrderDateTime" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const OrdersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="OrderID" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="UserID" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="RestaurantID" reference="Restaurants" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="ItemsOrdered" reference="Menus" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="TotalPrice" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="OrderStatus" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="DeliveryAddress" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="OrderDateTime" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput source="UserID" label="UserID" reference="Users" alwaysOn />,
  <ReferenceInput
    source="RestaurantID"
    label="RestaurantID"
    reference="Restaurants"
    alwaysOn
  />,
  <ReferenceInput
    source="ItemsOrdered"
    label="ItemsOrdered"
    reference="Menus"
    alwaysOn
  />,
  ,
  ,
  ,
  ,
];
