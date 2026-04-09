import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

export function calculateMonthlyInstallment(
  price: number,
  dp: number,
  tenorMonths: number,
  annualInterestRate: number
): number {
  const principal = price - dp;
  const monthlyRate = annualInterestRate / 100 / 12;
  if (monthlyRate === 0) return principal / tenorMonths;
  const monthly =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenorMonths)) /
    (Math.pow(1 + monthlyRate, tenorMonths) - 1);
  return Math.round(monthly);
}

export const WA_NUMBER = "6282174635218";
export const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

export function buildWhatsAppUrl(message: string): string {
  return `${WA_BASE_URL}?text=${encodeURIComponent(message)}`;
}
