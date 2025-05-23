import { OrderSide } from '@dydxprotocol/v4-client-js';

import { Nullable } from '@/lib/typeUtils';

export const TOGGLE_ACTIVE_CLASS_NAME = 'toggle-active';

// ------ Depth Chart ------ //
export enum DepthChartSeries {
  Asks = 'Asks',
  Bids = 'Bids',
  MidMarket = 'MidMarket',
}

export type DepthChartDatum = {
  size: number;
  price: number;
  depth: Nullable<number>;
  depthCost: number;
  seriesKey: DepthChartSeries;
};

export type DepthChartPoint = {
  side: OrderSide;
  price: number;
  size: number;
};

export const SERIES_KEY_FOR_ORDER_SIDE = {
  [OrderSide.BUY]: DepthChartSeries.Bids,
  [OrderSide.SELL]: DepthChartSeries.Asks,
};

// ------ Funding Chart ------ //
export enum FundingDirection {
  ToShort = 'ToShort',
  ToLong = 'ToLong',
  None = 'None',
}

export enum FundingRateResolution {
  OneHour = 'OneHour',
  EightHour = 'EightHour',
  Annualized = 'Annualized',
}

export type FundingChartDatum = {
  time: number;
  fundingRate: number;
  direction: FundingDirection;
};

// ------ Trading Rewards Chart ------ //
export type TradingRewardsDatum = {
  date: number;
  cumulativeAmount: number;
};

export type AffiliatesProgramDatum = {
  date: number;
  cumulativeAmount: number;
};

export enum AffiliatesProgramPeriod {
  Period1d = 'Period1d',
  Period7d = 'Period7d',
  Period30d = 'Period30d',
  Period90d = 'Period90d',
  PeriodAllTime = 'PeriodAllTime',
}

export enum AffiliatesProgramMetric {
  ReferredVolume = 'referredVolume',
  AffiliateEarnings = 'totalEarnings',
  ReferredUsers = 'totalReferredUsers',
  ReferredTrades = 'totalReferredTrades',
}

export const affiliatesProgramPeriods = Object.keys(
  AffiliatesProgramPeriod
) as AffiliatesProgramPeriod[];

export enum TradingRewardsPeriod {
  Period1d = 'Period1d',
  Period7d = 'Period7d',
  Period30d = 'Period30d',
  Period90d = 'Period90d',
  PeriodAllTime = 'PeriodAllTime',
}

export const tradingRewardsPeriods = Object.keys(TradingRewardsPeriod) as TradingRewardsPeriod[];
