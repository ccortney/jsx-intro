const Person = (props) => {
    return (
        <div>
            <p><b>Info about {props.name.length > 5 ? props.name.slice(0, 5) : props.name}:</b></p>
            <p>Age: {props.age} </p>
            <p>Voting Eligibility: {props.age < 18 ? "Too Young!" : "Go Vote!"}</p>
            <p>Hobbies:</p>
            <ul>
                {props.hobbies.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}