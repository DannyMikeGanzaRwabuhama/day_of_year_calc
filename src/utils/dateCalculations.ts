import type { CalculationBreakdown, MonthStep } from "src/types";

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

export const getDaysInMonth = (month: number, year: number): number => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 1 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonth[month];
};

export const calculateDayOfYear = (date: Date): CalculationBreakdown => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let total = 0;
  const steps: MonthStep[] = [];

  for (let i = 0; i < month; i++) {
    const daysInThisMonth = getDaysInMonth(i, year);
    total += daysInThisMonth;
    steps.push({
      month: new Date(year, i).toLocaleString('default', { month: 'long' }),
      days: daysInThisMonth
    });
  }

  total += day;

  return {
    dayNumber: total,
    isLeap: isLeapYear(year),
    steps: steps,
    currentDay: day,
    currentMonth: new Date(year, month).toLocaleString('default', { month: 'long' })
  };
};