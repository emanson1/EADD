import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";


export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props.field);
  return (
    <div>
    <DatePicker
    dateFormat="MM/dd/yyyy"
      {...field}
      {...props}
      selected={(new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
    </div>
  );
};
export default DatePickerField;