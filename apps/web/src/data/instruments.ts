import type { Instrument } from "@/types";

/**
 * Mock instrument data. Replace with a live feed via /api/quotes
 * (server-side) or a WebSocket client once a data provider is chosen.
 */
export const instruments: Instrument[] = [
  { symbol: "EURUSD", name: "Euro / US Dollar", category: "forex", bid: 1.08512, ask: 1.08519, change24h: 0.12, spread: 0.7, leverage: "1:500" },
  { symbol: "GBPUSD", name: "British Pound / US Dollar", category: "forex", bid: 1.26411, ask: 1.26421, change24h: -0.08, spread: 1.0, leverage: "1:500" },
  { symbol: "USDJPY", name: "US Dollar / Japanese Yen", category: "forex", bid: 151.212, ask: 151.224, change24h: 0.31, spread: 1.2, leverage: "1:500" },
  { symbol: "XAUUSD", name: "Gold / US Dollar", category: "metals", bid: 2318.45, ask: 2318.75, change24h: 0.54, spread: 30, leverage: "1:200" },
  { symbol: "US500", name: "S&P 500", category: "indices", bid: 5201.2, ask: 5201.8, change24h: -0.22, spread: 0.6, leverage: "1:100" },
  { symbol: "USOIL", name: "WTI Crude Oil", category: "commodities", bid: 82.14, ask: 82.19, change24h: 1.05, spread: 5, leverage: "1:100" },
  { symbol: "BTCUSD", name: "Bitcoin / US Dollar", category: "crypto", bid: 64210.5, ask: 64245.0, change24h: 2.41, spread: 34.5, leverage: "1:20" },
  { symbol: "AAPL", name: "Apple Inc.", category: "stocks", bid: 171.12, ask: 171.18, change24h: -0.64, spread: 0.06, leverage: "1:20" },
];
