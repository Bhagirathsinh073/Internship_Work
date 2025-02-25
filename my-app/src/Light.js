export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
        bodyStyle.color = 'white ';
      }
    }
  
    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }
  