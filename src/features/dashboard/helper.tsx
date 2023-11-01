import { Location, Status } from '@/types';

export const labelStatus = [
  {
    name: 'Sold',
    label: (
      <>
        Asset
        <br />
        Sold
      </>
    ),
    value: 0,
  },
  {
    name: 'Stock',
    label: (
      <>
        Asset In
        <br />
        Stock
      </>
    ),
    value: 0,
  },
  {
    name: 'Asset',
    label: (
      <>
        Expired
        <br />
        Asset
      </>
    ),
    value: 0,
  },
];

export const labelLocation = [
  { name: 'Gudang', label: 'Gudang', value: 0 },
  {
    name: 'Rak Penjualan',
    label: (
      <>
        Rak <br />
        Penjualan
      </>
    ),
    value: 0,
  },
];

export function defaultStatus(resData: Status[] | undefined) {
  if (!Boolean(resData)) return labelStatus;

  return labelStatus?.map((item) => {
    const statusData = resData?.filter(
      (value: Status) => value.status.name === item.name
    )[0];

    return {
      label: item.label,
      value: statusData?.count || 0,
    };
  });
}

export function defaultLocation(resData: Location[] | undefined) {
  if (!Boolean(resData)) return labelLocation;

  return labelLocation.map((item) => {
    const statusData = resData?.filter(
      (value: Location) => value.location.name === item.name
    )[0];

    return {
      label: item.label,
      value: statusData?.count || 0,
    };
  });
}

export function chartStatus(status: Status[]) {
  return status?.map((item) => ({ name: item.status.name, value: item.count }));
}
export function chartLocation(location: Location[]) {
  return location?.map((item) => ({
    name: item.location.name,
    value: item.count,
  }));
}
