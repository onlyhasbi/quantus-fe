import { AssetsResponse, AssetsScrollResponse, Options } from '@/types';

export const getLengthAssets = (data: AssetsScrollResponse): number =>
  data?.pages.reduce(
    (total: number, page: AssetsResponse) => total + page.results.length,
    0
  ) || 0;

export const flatArray = (data: AssetsScrollResponse): Options[] =>
  data?.pages.reduce(
    (pages, page) => [...pages, ...page.results],
    [] as Options[]
  ) || [];
