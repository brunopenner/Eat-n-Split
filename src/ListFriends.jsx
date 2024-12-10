import Friend from "./Friend";

export default function ListFriends () {
    return (
        <ul style={{listStyle: "none"}}>
            <Friend name={"Bruno"} amountOwing={24} />
            <Friend name={"Michael"} amountOwing={-7} />
            <Friend name={"David"} />
        </ul>
    )
}