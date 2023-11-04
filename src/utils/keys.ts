export const keys = (...args: string[]) =>
  args.map((arg) => arg.replace(/\//g, '_')).filter((arg) => Boolean(arg));
