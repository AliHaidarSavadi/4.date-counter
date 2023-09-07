import { useState } from "react";

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => setCurrentTime(new Date()), 1000);
  return (
    <p>
      {currentTime.getHours()}:{currentTime.getMinutes()}:
      {currentTime.getSeconds()}
    </p>
  );
}
