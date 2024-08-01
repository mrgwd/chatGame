import Message from "./message";

export default function MessagesList() {
  const messages = [
    { id: 1, date: "2021-09-01T12:00:00Z", message: "Hello" },
    { id: 2, date: "2021-09-01T12:01:00Z", message: "Hi" },
    { id: 3, date: "2021-09-01T12:02:00Z", message: "How are you?" },
  ];
  return (
    <div className="mt-8 grid gap-2">
      {messages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          date={message.date}
          message={message.message}
        />
      ))}
    </div>
  );
}
