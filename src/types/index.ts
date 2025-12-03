export interface CalculationBreakdown {
    dayNumber: number;
    isLeap: boolean;
    steps: MonthStep[];
    currentDay: number;
    currentMonth: string;
}

export interface MonthStep {
    month: string;
    days: number;
}