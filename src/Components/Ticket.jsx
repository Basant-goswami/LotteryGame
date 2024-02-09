import TicketNum from "./TicketNum";

export default function ({ ticket }) {
    return (
        <div>
            <p style={{fontWeight:"bold", fontSize:"1.5rem"}}>Tickets</p>
            {
                ticket.map((num, idx) => (
                    <TicketNum num={num} key={idx} />
                ))
            }
        </div>
    )
}