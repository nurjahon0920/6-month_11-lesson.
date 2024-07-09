import ReactDOM from "react-dom";

const DemoPortal = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Demo Portal</h1>
      <p>This is a portal component.</p>
      <button onClick={() => alert("Portal Alert!")}>Click me</button>
    </div>,
    document.getElementById("Demo_Portal")
  );
};

export default DemoPortal;
