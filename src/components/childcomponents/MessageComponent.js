const MessageComponent = ({messageSent}) => {
    return ( 
      
            <div className="message_Sent">
            <h5>{messageSent.user.name}</h5>
            {messageSent.message}
            <h5>{messageSent.time}</h5>
            </div>
      
     );
}
 
export default MessageComponent;