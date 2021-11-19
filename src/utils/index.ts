import { IData } from '../types';

export function getCategories(data: IData[]): string[] {
  if (data.length === 0) return [];
  const result = data.reduce((acc: string[], current: IData) => {
    return [...acc, ...current.categories];
  }, []);
  return Array.from(new Set(result));
}
