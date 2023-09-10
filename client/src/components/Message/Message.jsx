import { message } from "antd";

const success = ( mes = 'Success') => {
  message.success(mes);
};
const warning = (mes = 'Warning' ) => {
  message.warning(mes);
};
const error = (mes = 'Error') => {
  message.error(mes);
};

export {success, warning, error }