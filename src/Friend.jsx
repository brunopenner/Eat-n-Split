import placeholderImage from './assets/profile-placeholder.png';
import './Friend.css';

export default function Friend ({name, amountOwing}) {
    let isOwing = false;
    
    const whoOwes = () => {
        if (amountOwing < 0) {
            return <p style={{color: "green"}}>{name} owes you {amountOwing}</p>
        } else if (amountOwing > 0){
            return <p style={{color: "red"}}>You owe {name} {amountOwing}</p>
        } else {
            return <p>You and {name} are even.</p>
        }
    }
    return (
        <li className="friendCard">
            <img src={placeholderImage} alt="Profile picture"/>
            <div>
                <h3>{name}</h3>
               {whoOwes()}
            </div>
            <button>Select</button>
        </li>
    )
}