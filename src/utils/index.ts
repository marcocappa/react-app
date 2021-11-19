import { IData } from '../types';
import { formatDistance, compareAsc } from 'date-fns';

export function getCategories(data: IData[]): string[] {
  if (data.length === 0) return [];
  const result = data.reduce((acc: string[], current: IData) => {
    return [...acc, ...current.categories];
  }, []);
  return Array.from(new Set(result));
}

export function formatDate(first: string, last: string): string {
  return formatDistance(new Date(first), new Date(last), { addSuffix: true });
}

export function getLatestUpdatedDate(data: IData[]): Date {
  const dates = data.map(({ lastSeenDate }) => new Date(lastSeenDate));
  dates.sort(compareAsc);
  return dates[0];
}
