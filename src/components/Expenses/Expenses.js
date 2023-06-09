import { useState } from "react"
import ExpenseFilter from "./ExpenseFilter"
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          defaultYear={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>

  )
}