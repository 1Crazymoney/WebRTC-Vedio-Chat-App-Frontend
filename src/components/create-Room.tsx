import { useContext } from "react";
import { SocketContext } from "../context/socket-context";

const CreateRoom: React.FC = () => {
        const {socket} = useContext(SocketContext);
        const initRoom = () =>{
            socket.emit("create-room");
        }
        
        
        
        return(
        <button className="btn btn-accent" onClick={initRoom}>
            Start a new meeting
        </button>
        )
}

export default CreateRoom;
