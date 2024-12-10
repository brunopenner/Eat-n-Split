import "./NewFriend.css"

export default function NewFriend () {
    return (
        <form className="addFriend">
            <div className="inputWrapper">
                <label htmlFor="friendName">Friend Name</label>
                <input type="text" name="friendName" id="friendName" placeholder=""/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="url" name="imageUrl" id="imageUrl" />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}