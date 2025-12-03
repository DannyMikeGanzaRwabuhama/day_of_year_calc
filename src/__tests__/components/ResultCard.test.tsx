import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResultCard } from '../../components/ResultCard';
import type { CalculationBreakdown } from '../../types';

describe('ResultCard', () => {
  const mockBreakdown: CalculationBreakdown = {
    dayNumber: 75,
    isLeap: true,
    steps: [
      { month: 'January', days: 31 },
      { month: 'February', days: 29 },
    ],
    currentDay: 15,
    currentMonth: 'March',
  };

  it('should render the day number', () => {
    render(
      <ResultCard
        selectedDate={new Date(2024, 2, 15)}
        dayOfYear={75}
        breakdown={mockBreakdown}
      />
    );

    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('should show leap year indicator', () => {
    render(
      <ResultCard
        selectedDate={new Date(2024, 2, 15)}
        dayOfYear={75}
        breakdown={mockBreakdown}
      />
    );

    expect(screen.getByText(/2024 is a leap Year/i)).toBeInTheDocument();
  });

  it('should display breakdown steps', () => {
    render(
      <ResultCard
        selectedDate={new Date(2024, 2, 15)}
        dayOfYear={75}
        breakdown={mockBreakdown}
      />
    );

    expect(screen.getByText('January:')).toBeInTheDocument();
    expect(screen.getByText('31 days')).toBeInTheDocument();
    expect(screen.getByText('February:')).toBeInTheDocument();
    expect(screen.getByText('29 days')).toBeInTheDocument();
  });

  it('should not render content when dayOfYear is null', () => {
    render(
      <ResultCard
        selectedDate={new Date(2024, 2, 15)}
        dayOfYear={null}
        breakdown={null}
      />
    );

    expect(screen.queryByText('75')).not.toBeInTheDocument();
  });
});
