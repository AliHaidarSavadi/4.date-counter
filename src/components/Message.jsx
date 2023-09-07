export default function Message({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <p className="message">
      <strong>
        {count > 0
          ? `${count} days from today is ${date.toDateString()}`
          : count < 0
          ? `${Math.abs(count)} days ago was ${date.toDateString()}`
          : `Today is ${date.toDateString()}`}
      </strong>
    </p>
  );
}
