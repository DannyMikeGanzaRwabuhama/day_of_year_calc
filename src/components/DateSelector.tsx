import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar } from './ui/calendar';
import { MonthYearSelector } from './MonthYearSelector';

interface DateSelectorProps {
  selectedDate: Date;
  selectedMonth: number;
  selectedYear: number;
  years: number[];
  onDateSelect: (date: Date | undefined) => void;
  onMonthChange: (month: string) => void;
  onYearChange: (year: string) => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onMonthChangeFromCalendar: (date: Date) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  selectedMonth,
  selectedYear,
  years,
  onDateSelect,
  onMonthChange,
  onYearChange,
  onPreviousMonth,
  onNextMonth,
  onMonthChangeFromCalendar
}) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Select a Date</CardTitle>
        <CardDescription>Choose the month, year, and day</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <MonthYearSelector
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          years={years}
          onMonthChange={onMonthChange}
          onYearChange={onYearChange}
          onPreviousMonth={onPreviousMonth}
          onNextMonth={onNextMonth}
        />
        
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            month={selectedDate}
            onMonthChange={onMonthChangeFromCalendar}
            className="rounded-md border"
          />
        </div>
      </CardContent>
    </Card>
  );
};