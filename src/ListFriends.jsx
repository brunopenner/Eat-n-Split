import Friend from "./Friend";

export default function ListFriends({ friends, handleClick }) {
    return (
        <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: 0 }}>
            {friends.map((friend, index) => (
                <Friend key={index} name={friend.name} amountOwing={friend.amountOwing} imageUrl={friend.imageUrl} handleClick={handleClick}/>
            ))}
        </ul>
    );
}
