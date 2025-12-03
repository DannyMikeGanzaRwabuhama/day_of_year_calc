import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MONTHS } from '../constants';

interface MonthYearSelectorProps {
  selectedMonth: number;
  selectedYear: number;
  years: number[];
  onMonthChange: (month: string) => void;
  onYearChange: (year: string) => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
  selectedMonth,
  selectedYear,
  years,
  onMonthChange,
  onYearChange,
  onPreviousMonth,
  onNextMonth
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2">
        <label className="text-sm font-medium text-gray-700 mb-1 block">Month</label>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onPreviousMonth}
            className="h-10 w-10 shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Select value={selectedMonth.toString()} onValueChange={onMonthChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MONTHS.map((month, index) => (
                <SelectItem key={index} value={index.toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={onNextMonth}
            className="h-10 w-10 shrink-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="col-span-2">
        <label className="text-sm font-medium text-gray-700 mb-1 block">Year</label>
        <Select value={selectedYear.toString()} onValueChange={onYearChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-[200px]">
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};