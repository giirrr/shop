import { useEffect, useState } from "react";

function Ttest() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(() => {
    if (count != 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);
  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          //   setCount(count + 1);
          //   if (count < 3) {
          //     setAge(age + 1);
          //   }
          //   let count1 = count + 1;
          //   count1 <= 3 ? (setCount(count1), setAge(count1)) : null;
        }}
      >
        누르면한살먹기
      </button>
    </div>
  );
}

export default Ttest;
