# Day of Year Calculator

A React application that calculates which day of the year a given date corresponds to (1-365 for regular years, 1-366 for leap years).

## Features

- **Interactive Date Selection**: Choose dates using month/year dropdowns, navigation buttons, or a calendar interface
- **Instant Calculation**: Results appear immediately after selecting a date
- **Detailed Breakdown**: See step-by-step calculation showing days from each month
- **Leap Year Detection**: Automatically identifies and handles leap years
- **User-Friendly Interface**: Built with shadcn/ui components for a modern, responsive design

## How It Works

The calculator determines the day number by:

1. **Checking for leap year**: Uses the rule that a year is a leap year if divisible by 4, except centuries (divisible by 100) unless also divisible by 400
2. **Summing complete months**: Adds up all days from months before the selected month
3. **Adding current day**: Includes the day number from the selected month
4. **Displaying the result**: Shows the total with a detailed breakdown

## Example

**Date**: March 15, 2024
- January: 31 days
- February: 29 days (2024 is a leap year)
- March (current): 15 days
- **Total**: Day 75 of the year

## Usage

1. Select a year from the dropdown (range: 1925-2125)
2. Choose a month using the dropdown or navigation arrows (← →)
3. Click a day on the calendar
4. View the calculated day number and breakdown on the right

## Technologies

- React
- shadcn/ui components
- Tailwind CSS
- Lucide React icons