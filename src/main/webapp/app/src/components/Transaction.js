import React from "react";

const Transaction = ({item}) => (

    <div className="row">
        <div className="card hoverable">
            <div className="card-content">
                <span className="card-title"> {item.description} </span>
                <p className="new badge"> on {item.date} </p>
                <blockquote> $ {item.amount} </blockquote>
            </div>
            <div className="card-action">
                Category <a className="chip" href="#"> {item.category} </a>
                Expense By <a className="chip" href="#"> {item.expenseBy} </a>
            </div>
        </div>
    </div>
)

export default Transaction;
