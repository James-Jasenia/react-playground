import ExpenseItem from "./components/ExpenseItem";

const App = () => {

  const expenses = [
    { title: 'Car Insurance', amount: 200.00, date: new Date(2021, 2, 20)},
    { title: 'Health Insurance', amount: 150.00, date: new Date(2021, 9, 28)},
    { title: 'House Insurance', amount: 3400.00, date: new Date(2021, 1, 28)},
  ];

  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </div>
  );
};

export default App;
