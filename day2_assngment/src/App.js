import "./App.css";

function App() {
  // const age = 10;
  const name = ["Android","BlackBerry","Iphone","Windows phone"];
  const name1=["Samsung","HTC","micromax"]
  return (
    <>
      <div className="App">
        <h3>Mobile Operating System</h3>
        <div></div>
        <div>
          <ul>
            {name.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3>Mobile Manufactures</h3>
      <div>
        <ul>
              {name1.map((el)=>(
                <li>{el}</li>
              ))}
        </ul>
        <ul type="circle"><li>Apple</li></ul>
      </div>
    </>
  );
}
export default App;
