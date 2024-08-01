interface IMessage {
  id: number;
  date: string;
  message: string;
}
export default function Message({ date, message }: IMessage) {
  return (
    <div className="bg-purple-200 border border-solid border-slate-800 p-2 shadow-black">
      <div className="">
        <p>{message}</p>
        <span>{date}</span>
      </div>
      {/* <span className="font-bold">{id}</span> */}
    </div>
  );
}
