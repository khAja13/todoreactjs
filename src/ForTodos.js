import React from "react";
import './index.css'
import { db } from './firebase_config'
import 'firebase/compat/firestore';
import { ListItem, ListItemText, Button } from "@material-ui/core";

const ForTodos = (props) => {

    function updateMe() {
        db.collection("todo").doc(props.one.id).update({
            inprogress : !props.one.inprogress
        })
    }

    function removeMe(){
        db.collection("todo").doc(props.one.id).delete()
    }

    return(
        <div className="bottom">
            <div className="bottomInside">
                <ListItem className="other">
                    <ListItemText style={{textAlign:"center"}} primary={props.one.todo} secondary={ props.one.inprogress ? "In progress 🚧" : "completed ✔" } />
                </ListItem>
                <Button onClick={updateMe} style={{height : "50px", padding:"0px 20px", border:"1px solid black", marginRight:"7px"}}> {props.one.inprogress ? "Done" : "Undone"} </Button>
                <Button onClick={removeMe} style={{height : "50px", padding:"0px 20px", border:"1px solid black"}}>X</Button>
            </div>
        </div>
    )
}

export default ForTodos;