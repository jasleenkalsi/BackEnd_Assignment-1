export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
  export interface Asset {
    name: string;
    value: number;
  }
  
  export interface AssetAllocation {
    name: string;
    percentage: number;
  }
  
  export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
  ): PortfolioPerformance {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    const performanceSummary = `The portfolio ${
      profitOrLoss > 0
        ? `has gained $${profitOrLoss.toFixed(2)}`
        : `has lost $${Math.abs(profitOrLoss).toFixed(2)}`
    }, which is a ${percentageChange.toFixed(2)}% ${
      profitOrLoss > 0 ? "increase" : "decrease"
    }.`;
  
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
  }
  
  export function findLargestHolding(assets: Asset[]): Asset | null {
    if (assets.length === 0) return null;
    return assets.reduce((largest, asset) =>
      asset.value > largest.value ? asset : largest
    );
  }
  
  export function calculateAssetAllocation(assets: Asset[]): AssetAllocation[] {
    const totalValue = assets.reduce((total, asset) => total + asset.value, 0);
    return assets.map((asset) => ({
      name: asset.name,
      percentage: totalValue > 0 ? (asset.value / totalValue) * 100 : 0,
    }));
  }
  