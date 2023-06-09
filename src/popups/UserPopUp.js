import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import { green, pink, purple, blue } from '@mui/material/colors';

import usericon from '../images/user-computer-icons-apple-icon-image-format-business-person-icon-png-human-male-man-people-3b847a39523c874ea3506e86eb09f6ea.png';


function SimpleDialog({ onClose, selectedValue, open, userList, selectUser}) {

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (selectedUserEmail, selectedUserId) => {
    onClose(selectedUserEmail);
    selectUser(selectedUserId)
  };

  return (
    <Dialog onClose={handleClose} open={open} style={{position: "fixed", display: "flex", justifyContent: "center", width: "119%"}}>
      <DialogTitle style={{backgroundColor:"rgb(12, 27, 35)", color: "white"}}><strong>Choose Your Raider</strong></DialogTitle>
      <List sx={{ pt: 0 }} style={{backgroundColor:"rgb(21, 42, 54)", color: "white"}}>
        {userList.map((user) => (
            <ListItem disableGutters key={user.id} className="user_list_item">
                    <ListItemButton onClick={() => handleListItemClick(user.name, user.id)} key={user.id}>
                        <ListItemAvatar>
                            {user.id == 4 ? <Avatar sx={{ bgcolor: "#A665C6", color: "black" }}><PersonIcon /></Avatar>
                                : user.id == 2 ? <Avatar sx={{ bgcolor: "rgb(242, 61, 188)", color: "black" }}><PersonIcon /></Avatar>
                                : user.id == 3 ? <Avatar sx={{ bgcolor: "rgb(173,255,48)", color: "black" }}><PersonIcon /></Avatar>
                                : <Avatar sx={{ bgcolor: "rgb(68,227,255)", color: "black" }}><PersonIcon /></Avatar>
                            }
                        </ListItemAvatar> 
                        <ListItemText primary={user.name} />
                        {/* {user.email} */}
                    </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Dialog>
  );
}


const UserPopUp = ({userList, user, selectUser}) => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(user.name);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
    return ( 
        <div className="add-new-chatroom" style={{justifyContent: "center", textAlign: "center", margin: "200px"}}>
                    {/* <Typography variant="subtitle1" component="div">
                        Selected: {selectedValue}
                    </Typography> */}
            {/* <h2>Selected user: &emsp; {user.name}</h2> */}
                    {/* <br /> */}
                    {/* <Button variant="contained" onClick={handleClickOpen}>
                        Open simple dialog
                    </Button> */}
            
            <button id="select-user-button" onClick={handleClickOpen} style={{height: "100px", width: "100px"}}>
                    <img src={usericon} style={{width: "80px", filter: "invert(0.8)"}}/>
            </button>
                <br/><br/>
            <label htmlFor="select-user-button" style={{marginTop: "60px", marginLeft: "-112px", fontSize: "1.4em", color: "rgb(250,65,183)"}}>
                Select Raider<br/>
                {/* <p style={{color: "white"}}>{selectedValue}</p> */}
            </label>

            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                userList={userList}
                selectUser={selectUser}
            />
        </div>
     );
}
 
export default UserPopUp;