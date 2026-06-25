import getBudgetObject from './7-getBudgetObject';

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const date = new Date();
  const year = date.getFullYear();
  const budget = getBudgetObject(income, gdp, capita);

  const budgetCurrentYear = {
    [`income-${year}`]: budget.income,
    [`gdp-${year}`]: budget.gdp,
    [`capita-${year}`]: budget.capita,
  };

  return budgetCurrentYear;
}
