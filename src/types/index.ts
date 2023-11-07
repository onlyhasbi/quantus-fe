import { FieldValues } from 'react-hook-form';

export type AuthPayload = {
  email: string;
  password: string;
};

export type AuthMeResponse = {
  id: string;
  email: string;
  username: string;
  is_active: boolean;
  refreshed_token: string;
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

export type LoginFormProps = {
  onSubmit: (values: FieldValues) => void;
};

export type AssetPayload = {
  name: string;
  status_id: string;
  location_id: string;
};

export type AssetResponse = {
  id: string;
  name: string;
  status: Options;
  location: Options;
};

export type AssetsResponse = {
  count: number;
  page_count: number;
  page_size: number;
  page: number;
  results: Options[];
};

export type AssetsScrollResponse = {
  pages: AssetsResponse[];
  pageParams: number[];
};

export type InitialValues = AssetResponse;

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

type ScrollPage = {
  assets: Options[];
  length: number;
  nextPage: () => void;
  hasNext: boolean;
};

export type ListsProps = {
  onScroll: ScrollPage;
  onUpdate: (id: string) => void;
};

export type AssetFormProps = {
  onSubmit: (payload: FieldValues) => void;
  onDelete?: () => void;
  initialValues?: InitialValues;
};

export type LocationStatusResponse = {
  location: Options;
  count: number;
};

export type AssetStatusResponse = {
  location: Options;
  count: number;
};
