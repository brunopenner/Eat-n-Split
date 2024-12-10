import './App.css'
import BillData from './BillData'
import ListFriends from './ListFriends'
import NewFriend from './NewFriend'

function App() {

  return (
    <div style={{display: "flex", gap:50}}>
      <div className='leftColumn'>
        <ListFriends />
        <NewFriend />
      </div>
      <div className='rightColumn'>
        <BillData name="Bruno" />
      </div>
    </div>
      
  )
}

export default App
