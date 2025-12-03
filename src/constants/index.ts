export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const CURRENT_YEAR = new Date().getFullYear();
export const YEAR_RANGE = 200;

export const generateYears = (): number[] => {
  return Array.from(
    { length: YEAR_RANGE + 1 },
    (_, i) => CURRENT_YEAR - 100 + i
  );
};
