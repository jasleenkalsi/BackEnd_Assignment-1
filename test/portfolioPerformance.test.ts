import {
    calculatePortfolioPerformance,
    findLargestHolding,
    calculateAssetAllocation,
    Asset,
  } from '../src/portfolio/portfolioPerformance';
  
  describe('Portfolio Performance', () => {
    test('should calculate portfolio performance correctly', () => {
      const result = calculatePortfolioPerformance(10000, 12000);
      expect(result.profitOrLoss).toBe(2000);
      expect(result.percentageChange).toBeCloseTo(20);
      expect(result.performanceSummary).toContain('gained');
    });
  
    test('should handle a loss scenario', () => {
      const result = calculatePortfolioPerformance(10000, 8000);
      expect(result.profitOrLoss).toBe(-2000);
      expect(result.percentageChange).toBeCloseTo(-20);
      expect(result.performanceSummary).toContain('lost');
    });
  });
  
  describe('Largest Holding', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 5000 },
      { name: 'Bonds', value: 7000 },
      { name: 'Real Estate', value: 10000 },
    ];
  
    test('should return the largest holding', () => {
      const largest = findLargestHolding(assets);
      expect(largest).toEqual({ name: 'Real Estate', value: 10000 });
    });
  
    test('should handle an empty portfolio', () => {
      const largest = findLargestHolding([]);
      expect(largest).toBeNull();
    });
  });
  
  describe('Asset Allocation', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 5000 },
      { name: 'Bonds', value: 5000 },
    ];
  
    test('should calculate asset allocation percentages', () => {
      const allocation = calculateAssetAllocation(assets);
      expect(allocation).toEqual([
        { name: 'Stocks', percentage: 50 },
        { name: 'Bonds', percentage: 50 },
      ]);
    });
  
    test('should handle an empty portfolio', () => {
      const allocation = calculateAssetAllocation([]);
      expect(allocation).toEqual([]);
    });
  });
  