function Button(props)
{   
    let btnStyle = "btn btn-success";

    if(props.children === "Dislike")
        btnStyle = "btn btn-danger";

    return <button className={btnStyle} type="button">{props.children}</button>;
}