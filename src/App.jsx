import Screen from "./components/Screen";

function App() {
  return (
    <>
      <div className="bg-[#f3f6f4] w-screen h-screen flex justify-center items-center">
        <div className="flex justify-center items-center w-[90%] h-[90%] bg-[#f3f6f4] drop-shadow-xl">
          <Screen />
        </div>
      </div>
    </>
  );
}

export default App;
