function Button(props)
{   
    let btnStyle = "btn btn-success";

    if(props.children === "Dislike")
        btnStyle = "btn btn-danger";

    
    let style = {
        display: props.display
    }

    return <button style={style} onClick={props.click} className={btnStyle} type="button">{props.children}</button>;
}