import './BillData.css'

export default function BillData ({name}) {
    return (
        <div className="BillData">
            <h2>Split a bill with {name}</h2>
            <form>
                <legend></legend>
                <div className="inputWrapper">
                    <label htmlFor="billValue">💰 Bill value</label>
                    <input type="text" name="billValue" id="billValue" placeholder=""/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="yourExpense">🧍‍♀️ Your Expense</label>
                    <input type="text" name="yourExpense" id="yourExpense" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="otherPersonExpense">👫 {name}'s expense</label>
                    <input type="text" name="otherPersonExpense" id="otherPersonExpense" placeholder=""/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="whoPays">🤑 Who is paying the bill?</label>
                    <select name="whoPays" id="whoPays">
                        <option>You</option>
                        <option>{name}</option>
                    </select>
                </div>
                <button type="submit">Split Bill</button>
            </form>
        </div>
    )
}