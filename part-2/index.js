const App = () => {
    return (
        <div>
            <Tweet name="Camilla Cortney" username="ohmilla" date="4d" message="Love watching basketball"/>
            <Tweet name="Camilla Cortney" username="ohmilla" date="16h" message="This book is so stupid! 1 star!"/>
            <Tweet name="Camilla Cortney" username="ohmilla" date="3h" message="IT IS ALMOST WEDNESDAY!"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));