import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import ControlBudget from './components/ControlBudget'

function App() {
  const [budget, saveBudget] = useState(0)
  const [balance, saveBalance] = useState(0)
  const [showQuestion, saveShowQuestion] = useState(true)
  const [expenses, saveExpenses] = useState([])
  const [expense, saveExpense] = useState({})
  const [createExpense, saveCreateExpense] = useState(false)

  useEffect(() => {
    if (createExpense) {
      // add expense to
      saveExpenses([...expenses, expense])

      const newBalance = balance - expense.qty
      saveBalance(newBalance)

      saveCreateExpense(false)
    }
  }, [expense, createExpense, expenses, balance])

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveBalance={saveBalance}
              saveShowQuestion={saveShowQuestion}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className='one-half column'>
                <List expenses={expenses} />
                <ControlBudget budget={budget} balance={balance} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
