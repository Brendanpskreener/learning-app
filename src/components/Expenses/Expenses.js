import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import Card from '../UI/Card'
import './Expenses.css'

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter defaultYear={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      })}
      </Card>
    </div>
    
  )
}