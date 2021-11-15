import {useState} from 'react';
import Msg from './msg';
function Todo(props){

    // const [currentState , Updatefn ]
    const [MsgIsOpen , setMsgIsOpen ] = useState(false);


    function deleteHandler()
    {
      setMsgIsOpen(true);
    }

    function closeMsg(){
        setMsgIsOpen(false);
    }

    return( <div className="div1" index={props.index}>
    <h2> {props.title } </h2>
    <button className="Dbtn" onClick={deleteHandler} >delete</button>
    { MsgIsOpen ?  <Msg onCancel={closeMsg} onConfirm={props.deleteTodo} title={props.title} index={props.index} />   : null }
    </div>)
}

export default Todo;