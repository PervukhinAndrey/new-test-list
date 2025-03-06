import axios from "axios";

type TProps = {
  onSuccess: (data: any) => void;
  onError?: (error: any) => void;
  id?: number;
};

export const getTests = ({ onSuccess, onError = () => {}, id }: TProps) => {
  axios
    .get(`http://localhost:3100/tests${id ? "?id=" + id : ""}`)
    .then(function (response) {
      onSuccess(response.data);
    })
    .catch(function (error) {
      onError(error);
    });
};

enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface ITest {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export interface ISite {
  id: number;
  url: string;
}
