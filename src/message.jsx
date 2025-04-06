import { preprocessCSS } from "vite";

function Message(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export default Message;