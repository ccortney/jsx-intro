const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Camilla"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));