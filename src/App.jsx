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

    // State to store the selected friend
    const [selectedFriend, setSelectedFriend] = useState(null);

    // Function to handle adding a new friend
    const addFriend = (newFriend) => {
        setFriends((prevFriends) => [...prevFriends, newFriend]);
    };

    const onSelectFriend = (friend) => {
      setSelectedFriend(friend);
    }

    // Function to handle split Bill
    const splitBill = (updatedFriend) => {
        setFriends((prevFriends) => 
          prevFriends.map((friend) =>
            friend.name === updatedFriend.name ? updatedFriend : friend
          )
        );
    };

    return (
        <div style={{ display: "flex", gap: 50 }}>
            <div className="leftColumn">
                <ListFriends friends={friends} handleClick={onSelectFriend} /> {/* Passing friends as prop */}
                <NewFriend onAddFriend={addFriend} /> {/* Passing addFriend as prop */}
            </div>
            <div className="rightColumn">
                {selectedFriend ? (
                  <BillData name={selectedFriend.name} onSplitBill={splitBill}/>
                ) :
                ""
                }
            </div>
        </div>
    );
}

export default App;
