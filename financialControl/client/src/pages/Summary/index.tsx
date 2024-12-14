import '../../styles/summary.css'
import Sidebar from '../../Components/Sidebar'
import { useState, useEffect } from 'react'
import { IoHomeOutline } from "react-icons/io5";

const Summary = () => {
    const [date, setDate] = useState<String | undefined>(undefined)

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString()
        setDate(currentDate)
    }, [])

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
                                <label htmlFor="">$439.9K</label>
                            </section>
                        
                            <section className="section-summary incomes">
                                <h2>incomes</h2>
                                <label htmlFor="">$439.9K</label>
                            </section>

                            <section className="section-summary expenses">
                                <h2>expenses</h2>
                                <label htmlFor="">$439.9K</label>
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