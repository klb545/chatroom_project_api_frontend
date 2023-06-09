import MessageComponent from "./MessageComponent";

const ChatHistory = ({messageHistory, notificationMessage, user}) => {

    const displayMessages = messageHistory.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)).map((messageSent) => {
        return <MessageComponent 
                    key={messageSent.id}
                    messageSent={messageSent}
                    notificationMessage={notificationMessage}
                    user={user}/>
    })

    return ( 
        <div>
            {displayMessages}
        </div>
     );
}
 
export default ChatHistory;