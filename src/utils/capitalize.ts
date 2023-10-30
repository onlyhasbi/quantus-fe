export const capitalize = (value: string | undefined) => {
  if (!value) return '';

  return value
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
};
