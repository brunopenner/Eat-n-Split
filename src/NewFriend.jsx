import { useState } from "react";
import "./NewFriend.css";

export default function NewFriend({ onAddFriend }) {
    const [viewForm, setViewForm] = useState(false);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleClick = () => {
        setViewForm(!viewForm);
    };

    const handleSubmission = (evt) => {
        evt.preventDefault();

        // Create a new friend object
        const newFriend = { name, imageUrl, amountOwing: 0 };

        // Pass the new friend to the parent component
        onAddFriend(newFriend);

        setName(""); // Clear form
        setImageUrl(""); // Clear form
    };

    return (
        <div style={{ textAlign: "right" }}>
            {viewForm && (
                <form onSubmit={handleSubmission} className="addFriend">
                    <div className="inputWrapper">
                        <label htmlFor="friendName">👫 Friend Name</label>
                        <input
                            type="text"
                            name="friendName"
                            id="friendName"
                            placeholder="Enter friend's name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="imageUrl">🌄 Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            placeholder="Enter image URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button type="submit">Add</button>
                </form>
            )}
            <button
                style={{ marginRight: 15, marginTop: 20 }}
                onClick={handleClick}
            >
                {!viewForm ? "Add Friend" : "Close"}
            </button>
        </div>
    );
}
