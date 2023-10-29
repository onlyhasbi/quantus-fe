export type StatisticCardProps = {
  label: React.ReactNode;
  value: number;
};

export type StatisticProps = {
  title: string;
  info?: StatisticCardProps[];
};

export type Options = {
  id: string;
  name: string;
};

export type Status = {
  status: Options;
  count: number;
};

export type Location = {
  location: Options;
  count: number;
};
