import { BookmarkType } from '@/types';

const isSameDay = (date: Date, compare: Date) =>
  date.getFullYear() === compare.getFullYear() &&
  date.getMonth() === compare.getMonth() &&
  date.getDate() === compare.getDate();

export const filterToday = (data: BookmarkType[]) => {
  const today = new Date();
  return data
    .filter(item => isSameDay(new Date(item.date), today))
    .slice(0, 5);
};

export const filterLast7Days = (data: BookmarkType[]) => {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  return data
    .filter(item => {
      const d = new Date(item.date);
      return d >= sevenDaysAgo && d <= now;
    })
    .slice(0, 5);
};

export const filterByMonth = (data: BookmarkType[], month: number) => {
  return data
    .filter(item => new Date(item.date).getMonth() === month)
    .slice(0, 5);
};

export const groupByMonth = (data: BookmarkType[]) => {
  return data.reduce<Record<string, BookmarkType[]>>((acc, item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString('default', { month: 'long' });

    if (!acc[month]) acc[month] = [];
    acc[month].push(item);

    return acc;
  }, {});
};
