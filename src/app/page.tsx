import {useState} from "react";
export default function Home() {
  const [text, setText] = useState('');
  return (
    <input value={text} onChange={event => setText(event.target.value)} type="text" placeholder="Text" className={"w-full py-2.5 px-2 bg-neutral-100 text-neutral-950"} />
  );
}
