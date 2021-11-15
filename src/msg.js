function Msg(props)
{

    function cancelHandler()
    {
        props.onCancel();

    }

    function confirmHandler()
    {
        props.onConfirm();

    }

    return (
        <div className="backdrop" onClick={cancelHandler}>

    <div className="div2"> 
                <h3> Are you sure want to delete "{props.title}" ?</h3>
                <div className="div3">
                    <button className="Conbtn" onClick={confirmHandler}>Confirm</button>
                    <button className="Canbtn" onClick={cancelHandler}>Cancel</button>
                </div>
            </div>
        </div>)
}

export default Msg;