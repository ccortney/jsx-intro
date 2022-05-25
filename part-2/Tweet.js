const Tweet = (props) => {
    return (
        <div>
            <p><b>{props.name}</b> @{props.username} • {props.date} </p>
            <p>{props.message}</p>
        </div>
    )
}