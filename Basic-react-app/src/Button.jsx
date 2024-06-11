function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}
function handleMouseOver() {
  console.log("Bye");
}
function handleDblClick() {
  console.log("you double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        aliquam nostrum error, soluta maxime, distinctio in aperiam, alias vitae
        amet eligendi animi quisquam suscipit libero ipsa! Minima ex temporibus
        quam. Deleniti reprehenderit perferendis aut quo quidem nostrum dolore!
        Sunt asperiores blanditiis ex perspiciatis possimus vitae quas ipsam
        dolore rem, accusantium ullam dolores mollitia ducimus sapiente itaque
        non atque facere cum.
      </p>
      <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>
  );
}
