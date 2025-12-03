import { useState, useEffect } from 'react';
import { calculateDayOfYear, getDaysInMonth } from '../utils/dateCalculations';
import type { CalculationBreakdown } from '../types';

export const useDateCalculator = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [dayOfYear, setDayOfYear] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<CalculationBreakdown | null>(null);

  const updateCalculation = (date: Date) => {
    const result = calculateDayOfYear(date);
    setDayOfYear(result.dayNumber);
    setBreakdown(result);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setSelectedMonth(date.getMonth());
      setSelectedYear(date.getFullYear());
      updateCalculation(date);
    }
  };

  const handleMonthChange = (month: string) => {
    const monthIndex = parseInt(month);
    setSelectedMonth(monthIndex);
    const newDate = new Date(selectedYear, monthIndex, selectedDate.getDate());
    const maxDay = getDaysInMonth(monthIndex, selectedYear);
    if (newDate.getDate() > maxDay) {
      newDate.setDate(maxDay);
    }
    setSelectedDate(newDate);
    updateCalculation(newDate);
  };

  const handleYearChange = (year: string) => {
    const yearNum = parseInt(year);
    setSelectedYear(yearNum);
    const newDate = new Date(yearNum, selectedMonth, selectedDate.getDate());
    const maxDay = getDaysInMonth(selectedMonth, yearNum);
    if (newDate.getDate() > maxDay) {
      newDate.setDate(maxDay);
    }
    setSelectedDate(newDate);
    updateCalculation(newDate);
  };

  const handlePreviousMonth = () => {
    let newMonth = selectedMonth - 1;
    let newYear = selectedYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
    const newDate = new Date(newYear, newMonth, selectedDate.getDate());
    const maxDay = getDaysInMonth(newMonth, newYear);
    if (newDate.getDate() > maxDay) {
      newDate.setDate(maxDay);
    }
    setSelectedDate(newDate);
    updateCalculation(newDate);
  };

  const handleNextMonth = () => {
    let newMonth = selectedMonth + 1;
    let newYear = selectedYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
    const newDate = new Date(newYear, newMonth, selectedDate.getDate());
    const maxDay = getDaysInMonth(newMonth, newYear);
    if (newDate.getDate() > maxDay) {
      newDate.setDate(maxDay);
    }
    setSelectedDate(newDate);
    updateCalculation(newDate);
  };

  const handleMonthChangeFromCalendar = (date: Date) => {
    const newMonth = date.getMonth();
    const newYear = date.getFullYear();
    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
    const newDate = new Date(newYear, newMonth, selectedDate.getDate());
    const maxDay = getDaysInMonth(newMonth, newYear);
    if (newDate.getDate() > maxDay) {
      newDate.setDate(maxDay);
    }
    setSelectedDate(newDate);
    updateCalculation(newDate);
  };

  useEffect(() => {
    updateCalculation(selectedDate);
  }, []);

  return {
    selectedDate,
    selectedMonth,
    selectedYear,
    dayOfYear,
    breakdown,
    handleDateSelect,
    handleMonthChange,
    handleYearChange,
    handlePreviousMonth,
    handleNextMonth,
    handleMonthChangeFromCalendar
  };
};