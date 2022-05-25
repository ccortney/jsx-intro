const App = () => {
    return (
        <div>
            <Person name="Camilla" age="29" hobbies={["reading books", "listening to audiobooks", "reading on my kindle"]}/>
            <Person name="Ginny" age="5" hobbies ={["eating", "begging to eat", "playing", "begging to play", "singing"]}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));