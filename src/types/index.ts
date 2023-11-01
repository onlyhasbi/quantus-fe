import { FieldValues } from 'react-hook-form';

export type AuthPayload = {
  email: string;
  password: string;
};

export type StatisticCardProps = {
  label: React.ReactNode;
  value: number;
};

export type StatisticProps = {
  title: string;
  data: Chart[];
  info?: StatisticCardProps[];
};

export type Options = {
  id: string;
  name: string;
};

export type Chart = {
  name: string;
  value: number;
};

export type Status = {
  status: Options;
  count: number;
};

export type Location = {
  location: Options;
  count: number;
};

export type XAxisData = {
  textAnchor: string;
  verticalAnchor: string;
  strokeOpacity: number;
  orientation: string;
  width: number;
  height: number;
  x: number;
  y: number;
  className: string;
  stroke: string;
  fill: string;
  index: number;
  payload: {
    coordinate: number;
    value: string;
    index: number;
    offset: number;
    tickCoord: number;
    isShow: boolean;
  };
  visibleTicksCount: number;
};

export type LoginFormProps = {
  onSubmit: (values: FieldValues) => void;
};

export type AssetPayload = {
  name: string;
  status_id: string;
  location_id: string;
};

export type InitialValues = {
  id: string;
  name: string;
  status: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
};

export type StatusChartProps = {
  data: Chart[];
};

export type InputSearchProps = {
  onSearch: (value: string) => void;
};

export type AlertDialogProps = {
  open: boolean;
  title: string;
  message: string;
};

export type ListsProps = {
  assets: Options[];
  onUpdate: (id: string) => void;
};

export type AssetFormProps = {
  onSubmit: (payload: FieldValues) => void;
  onDelete?: () => void;
  initialValues?: InitialValues;
};
