import { useState } from 'react';
import './BillData.css'

export default function BillData ({name, onSplitBill}) {
    const [billValue, setBillValue] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [friendExpense, setFriendExpense] = useState(0);
    const [whoPays, setWhoPays] = useState("You");

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log("Form submitted!!!!")

        let amountOwing;
        whoPays === "You" ? amountOwing = friendExpense - billValue : amountOwing = billValue - friendExpense;
        console.log("Amount owing: ", amountOwing)
        console.log("who Pays the bill? ", whoPays)
        const updatedFriend = {name, amountOwing};
        onSplitBill(updatedFriend);

        setYourExpense(0);
        setBillValue(0);
        setFriendExpense(0);
    }

    return (
        <div className="BillData">
            <h2>Split a bill with {name}</h2>
            <form onSubmit={handleSubmission}>
                <legend></legend>
                <div className="inputWrapper">
                    <label htmlFor="billValue">💰 Bill value</label>
                    <input type="number" name="billValue" id="billValue" placeholder="" value={billValue} onChange={(e) => setBillValue(e.target.value)}/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="yourExpense">🧍‍♀️ Your Expense</label>
                    <input type="number" name="yourExpense" id="yourExpense" value={yourExpense} onChange={(e) => setYourExpense(e.target.value)}/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="otherPersonExpense">👫 {name}'s expense</label>
                    <input type="number" name="otherPersonExpense" id="otherPersonExpense" placeholder="" value={friendExpense} onChange={(e) => setFriendExpense(e.target.value)}/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="whoPays">🤑 Who is paying the bill?</label>
                    <select name="whoPays" id="whoPays" onChange={(e) => setWhoPays(e.target.value)}>
                        <option value="You">You</option>
                        <option value="Friend">{name}</option>
                    </select>
                </div>
                <button type="submit">Split Bill</button>
            </form>
        </div>
    )
}