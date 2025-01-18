// Interface to define the return type of the portfolio performance function
export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
  // Function to calculate the portfolio performance
  export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
    // Calculate profit or loss
    const profitOrLoss = currentValue - initialInvestment;
  
    // Calculate percentage change based on initial investment
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    // Generate performance summary without using `if` statement
    const performanceSummary = percentageChange > 20
      ? `The portfolio has gained significantly with a profit of $${profitOrLoss}.`
      : `The portfolio has performed poorly.`;
  
    // Return the portfolio performance details
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
  }
  