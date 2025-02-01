import '../../styles/summary.css'
import Sidebar from '../../Components/Sidebar'
import { useState, useEffect, useRef } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, Title, Tooltip, Legend, ArcElement } from 'chart.js/auto'

interface FinanceAccount {
    balance: number,
    incomes: number,
    expenses: number,
}

const Summary = () => {
  const [date, setDate] = useState<String | undefined>(undefined)
  const [financeAccount, setFinanceAccount] = useState<FinanceAccount | null>(null);
  const [transactions, setTransactions] = useState<any[]>([])

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
}, []);

useEffect(() => {
    const fetchFinanceAccount = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/account/678e51f7a1d8297023859271', {
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
        } catch (e: any) {
            console.error(e);
        }
    };

    fetchFinanceAccount();
}, []);

useEffect(() => {
    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/transactions/678e51f7a1d8297023859271', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }

            const data = await response.json();
            setTransactions(data);
            console.log('Transactions:', data);
        } catch (e: any) {
            console.error('Error fetching transactions:', e);
        }
    };

    fetchTransactions();
}, []);

// chart config
ChartJS.register(
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    ArcElement
)


const incomesChart = {
  labels: ['Total', 'Test', 'Other test'],
  datasets: [{
    label: 'Sales',
    data: [10, 20, 15],
    backgroundColor: [
      '#192030',
      '#E3EAF2',
      '#4B59E0'
    ]
  }]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}


if (!financeAccount) {
  return <p>Loading...</p>;
}


    return (
            <>
                <Sidebar />
                    <div className="container-summary">

                        <div className="container-title">
                            <h1><IoHomeOutline className='icon-title' />Summary</h1>
                        </div>

                        <div className="container-style-summary">                        
                            <section className="section-summary incomes">
                                <h2>incomes</h2>
                                <label htmlFor="">{financeAccount.incomes}</label>
                            </section>

                            <section className="section-summary expenses">
                                <h2>expenses</h2>
                                <label htmlFor="">{financeAccount.expenses}</label>
                            </section>

                            <section className="section-summary current-month">
                                <h2>balance</h2>
                                <label htmlFor="">{financeAccount.balance}</label>
                            </section>

                        <section className="section-summary expenses-by-categories">
                                <h2>incomes by categories</h2>
                                <Bar data={incomesChart} options={chartOptions} />
                                <label htmlFor="">$439.9K</label>
                            </section>
                            <section className="section-summary incomes-by-categories">
                                <h2>incomes by categories</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>
                            <section className="section-summary incomes-by-categories">
                                <h2>expenses by categories</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>
                            <section className="section-summary incomes-by-categories">
                                <h2>expenses by categories</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>
                            </div>

                            <ul>
                              {transactions.map((transaction, index) => (
                                <li key={index}>{transaction.type}</li>
                              ))
                              }
                            </ul>


        {/* <div className="container-date">
            <label>Today is {date}</label>
        </div> */}
                    </div>
            </>
    )
}

export default Summary