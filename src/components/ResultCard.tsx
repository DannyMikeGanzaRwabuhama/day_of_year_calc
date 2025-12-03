import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import type { CalculationBreakdown } from '../types';

interface ResultCardProps {
  selectedDate: Date;
  dayOfYear: number | null;
  breakdown: CalculationBreakdown | null;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  selectedDate,
  dayOfYear,
  breakdown
}) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Result</CardTitle>
        <CardDescription>
          {selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {dayOfYear !== null && breakdown && (
          <div className="space-y-4">
            <div className="bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">{dayOfYear}</div>
              <div className="text-lg">
                Day of the Year {breakdown.isLeap && '(Leap Year)'}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-3">Calculation Breakdown:</h3>
              <div className="space-y-2 text-sm">
                {breakdown.steps.map((step, index) => (
                  <div key={index} className="flex justify-between text-gray-600">
                    <span>{step.month}:</span>
                    <span className="font-medium">{step.days} days</span>
                  </div>
                ))}
                <div className="flex justify-between text-gray-600 border-t pt-2">
                  <span>{breakdown.currentMonth} (current):</span>
                  <span className="font-medium">{breakdown.currentDay} days</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 border-t-2 pt-2 mt-2">
                  <span>Total:</span>
                  <span>{dayOfYear} days</span>
                </div>
              </div>
            </div>

            {breakdown.isLeap && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <span className="text-green-700 text-sm font-medium">
                  🗓️ {selectedDate.getFullYear()} is a leap year (366 days total)
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};