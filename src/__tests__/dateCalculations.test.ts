import { describe, it, expect } from 'vitest';
import { isLeapYear, getDaysInMonth, calculateDayOfYear } from '../utils/dateCalculations';

describe('isLeapYear', () => {
  it('should return true for years divisible by 4', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2020)).toBe(true);
  });

  it('should return false for years not divisible by 4', () => {
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(2021)).toBe(false);
  });

  it('should return false for years divisible by 100 but not 400', () => {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);
  });

  it('should return true for years divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2400)).toBe(true);
  });
});

describe('getDaysInMonth', () => {
  it('should return correct days for each month in a regular year', () => {
    expect(getDaysInMonth(0, 2023)).toBe(31); // January
    expect(getDaysInMonth(1, 2023)).toBe(28); // February
    expect(getDaysInMonth(3, 2023)).toBe(30); // April
  });

  it('should return 29 for February in a leap year', () => {
    expect(getDaysInMonth(1, 2024)).toBe(29);
    expect(getDaysInMonth(1, 2000)).toBe(29);
  });

  it('should return 28 for February in a non-leap year', () => {
    expect(getDaysInMonth(1, 2023)).toBe(28);
    expect(getDaysInMonth(1, 1900)).toBe(28);
  });
});

describe('calculateDayOfYear', () => {
  it('should return 1 for January 1st', () => {
    const result = calculateDayOfYear(new Date(2024, 0, 1));
    expect(result.dayNumber).toBe(1);
  });

  it('should return 32 for February 1st', () => {
    const result = calculateDayOfYear(new Date(2024, 1, 1));
    expect(result.dayNumber).toBe(32);
  });

  it('should calculate correctly for March 15, 2024 (leap year)', () => {
    const result = calculateDayOfYear(new Date(2024, 2, 15));
    expect(result.dayNumber).toBe(75); // 31 (Jan) + 29 (Feb) + 15
    expect(result.isLeap).toBe(true);
  });

  it('should calculate correctly for March 15, 2023 (non-leap year)', () => {
    const result = calculateDayOfYear(new Date(2023, 2, 15));
    expect(result.dayNumber).toBe(74); // 31 (Jan) + 28 (Feb) + 15
    expect(result.isLeap).toBe(false);
  });

  it('should return 365 for December 31st in a regular year', () => {
    const result = calculateDayOfYear(new Date(2023, 11, 31));
    expect(result.dayNumber).toBe(365);
  });

  it('should return 366 for December 31st in a leap year', () => {
    const result = calculateDayOfYear(new Date(2024, 11, 31));
    expect(result.dayNumber).toBe(366);
  });

  it('should include correct breakdown information', () => {
    const result = calculateDayOfYear(new Date(2024, 2, 15));
    expect(result.steps).toHaveLength(2);
    expect(result.steps[0].month).toBe('January');
    expect(result.steps[0].days).toBe(31);
    expect(result.steps[1].month).toBe('February');
    expect(result.steps[1].days).toBe(29);
    expect(result.currentDay).toBe(15);
    expect(result.currentMonth).toBe('March');
  });
});