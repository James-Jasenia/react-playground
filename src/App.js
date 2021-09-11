import ExpenseTable from './components/Expenses/ExpenseTable'

const App = () => {

  const expenses = [
    { title: 'Car Insurance', amount: 200.00, date: new Date(2021, 2, 20)},
    { title: 'Health Insurance', amount: 150.00, date: new Date(2021, 9, 28)},
    { title: 'House Insurance', amount: 3400.00, date: new Date(2021, 1, 28)},
  ];

  return (
    <ExpenseTable expenses={expenses} />
  );
};

export default App;
