import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';


const ToDoList=(props)=>
{
    const deleteItems=()=>
    {
        
    }
    return(
    <>
    <div className="todo_style">
    <FontAwesomeIcon className="fa-times" icon={faCircleXmark}
    onClick={()=>
    {
        props.onSelect(props.id)
    }}
    />
    <li>{props.text}</li>
    </div>
    </>)
}

export default ToDoList;