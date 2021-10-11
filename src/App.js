import ExpenseTable from './components/Expenses/ExpenseTable';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    { title: 'Car Insurance', amount: 200.00, date: new Date(2021, 2, 20)},
    { title: 'Health Insurance', amount: 150.00, date: new Date(2021, 9, 28)},
    { title: 'House Insurance', amount: 3400.00, date: new Date(2021, 1, 28)},
  ];

  return (
    <div>
      <ExpenseForm />
      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default App;
