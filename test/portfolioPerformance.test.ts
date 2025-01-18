// test/portfolioPerformance.test.ts
import { calculatePortfolioPerformance, PortfolioPerformance } from 'src/portfolio/portfolioPerformance';


describe('calculatePortfolioPerformance', () => {
  it('should calculate the performance of the portfolio with a profit of 20%', () => {
    const initialInvestment = 10000;
    const currentValue = 12000;
    
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(12000);
    expect(result.profitOrLoss).toBe(2000);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toBe('The portfolio has performed poorly.');
  });

  it('should calculate the performance of the portfolio with a significant gain of 30%', () => {
    const initialInvestment = 10000;
    const currentValue = 13000;
    
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(13000);
    expect(result.profitOrLoss).toBe(3000);
    expect(result.percentageChange).toBe(30);
    expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $3000.');
  });

  it('should calculate the performance of the portfolio with a loss', () => {
    const initialInvestment = 10000;
    const currentValue = 8000;
    
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(8000);
    expect(result.profitOrLoss).toBe(-2000);
    expect(result.percentageChange).toBe(-20);
    expect(result.performanceSummary).toBe('The portfolio has performed poorly.');
  });

  it('should handle edge case where the portfolio has no profit or loss', () => {
    const initialInvestment = 10000;
    const currentValue = 10000;
    
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(10000);
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe('The portfolio has performed poorly.');
  });
});
