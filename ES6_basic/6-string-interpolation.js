export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,858',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, the budget of San Francisco should be ${budget.income}, the GDP is ${budget.gdp} and the income per capita is ${budget.capita}`;
}
