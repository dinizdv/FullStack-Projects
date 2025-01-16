import '../../styles/summary.css'
import Sidebar from '../../Components/Sidebar'
import { useState, useEffect } from 'react'
import { IoHomeOutline } from "react-icons/io5";

interface FinanceAccount {
    balance: number,
    incomes: number,
    expenses: number,
}

const Summary = () => {
    const [date, setDate] = useState<String | undefined>(undefined)
  const [financeAccount, setFinanceAccount] = useState<FinanceAccount | null>(null);

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString()
        setDate(currentDate)
    }, [])

    useEffect(() => {
        const fetchFinanceAccount = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/account/678930d29243abc339aad769', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setFinanceAccount(data);
          } catch (e) {
          }
        };
    
        fetchFinanceAccount();
      }, []);
    
      if (!financeAccount) {
        return null;
      }

    return (
            <>
                <Sidebar />
                    <div className="container-summary">

                        <div className="container-title">
                            <h1><IoHomeOutline className='icon-title' />Summary</h1>
                        </div>

                        <div className="container-style-summary">
                            <section className="section-summary current-month">
                                <h2>balance</h2>
                                <label htmlFor="">{financeAccount.balance}</label>
                            </section>
                        
                            <section className="section-summary incomes">
                                <h2>incomes</h2>
                                <label htmlFor="">{financeAccount.incomes}</label>
                            </section>

                            <section className="section-summary expenses">
                                <h2>expenses</h2>
                                <label htmlFor="">{financeAccount.expenses}</label>
                            </section>

                        <section className="section-summary incomes-and-expenses">
                                <h2>incomes and expenses (last 6 months)</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>
                        <section className="section-summary expenses-by-categories">
                                <h2>expenses by categories</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>
                            <section className="section-summary incomes-by-categories">
                                <h2>incomes by categories</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>
                            </div>

        {/* <div className="container-date">
            <label>Today is {date}</label>
        </div> */}
                    </div>
            </>
    )
}

export default Summary