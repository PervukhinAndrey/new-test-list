import axios from "axios";

type TProps = {
  onSuccess: (data: any) => void;
  onError?: (error: any) => void;
};

export const getSites = ({ onSuccess, onError = () => {} }: TProps) => {
  axios
    .get("http://localhost:3100/sites")
    .then(function (response) {
      onSuccess(response.data);
    })
    .catch(function (error) {
      onError(error);
    });
};
