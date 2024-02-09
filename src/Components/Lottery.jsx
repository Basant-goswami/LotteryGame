
import { useState } from "react"
import "../CSS/Lottery.css"
import Ticket from "./Ticket"
import { gentickets } from "../js/Lottery";

export default function ({ n, winCondition }) {
    let [ticket, setTicket] = useState(gentickets(n));

    let buyTicket = () => {
        setTicket(gentickets(n));
    }

    return (
        <div className="LotteryMain">
            <div className="Lottery">
                <div>
                    <h1>Welcome to lottery game</h1>
                    <Ticket ticket={ticket} />
                    <button onClick={buyTicket}>Buy New Tickets</button>
                    <h2 style={{color:"red"}}>{winCondition(ticket) && "Congrats,You won the game !!!"}</h2>
                </div>
            </div>
        </div>
    )
}