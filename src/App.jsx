import { useState } from "react";
import "./App.css";
import BillData from "./BillData";
import ListFriends from "./ListFriends";
import NewFriend from "./NewFriend";

function App() {
    // State to store friends
    const [friends, setFriends] = useState([
        { name: "Bruno", amountOwing: 24 },
        { name: "Michael", amountOwing: -7 },
        { name: "David", amountOwing: 0 },
    ]);

    // Function to handle adding a new friend
    const addFriend = (newFriend) => {
        setFriends((prevFriends) => [...prevFriends, newFriend]);
    };

    return (
        <div style={{ display: "flex", gap: 50 }}>
            <div className="leftColumn">
                <ListFriends friends={friends} /> {/* Passing friends as prop */}
                <NewFriend onAddFriend={addFriend} /> {/* Passing addFriend as prop */}
            </div>
            <div className="rightColumn">
                <BillData name="Bruno" />
            </div>
        </div>
    );
}

export default App;
