import React from 'react';
import { useDateCalculator } from './hooks/useDateCalculator';
import { generateYears } from './constants';
import { DateSelector } from './components/DateSelector';
import { ResultCard } from './components/ResultCard';

const DayofYearCalculator: React.FC = () => {
  const {
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
    handleMonthChangeFromCalendar,
  } = useDateCalculator();

  const years = generateYears();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Day of Year Calculator
          </h1>
          <p className="text-gray-600">
            Select a date to find out which day of the year it is
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <DateSelector
            selectedDate={selectedDate}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            years={years}
            onDateSelect={handleDateSelect}
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onMonthChangeFromCalendar={handleMonthChangeFromCalendar}
          />

          <ResultCard
            selectedDate={selectedDate}
            dayOfYear={dayOfYear}
            breakdown={breakdown}
          />
        </div>
      </div>
    </div>
  );
};

export default DayofYearCalculator;
