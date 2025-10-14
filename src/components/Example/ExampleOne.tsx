// 왜 focus가 동작하지 않는 것인가?

import { useRef, useState } from "react";

const Test = () => {
  const [modal, setModal] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOpenModal = () => {
    setModal(true);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };


  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {modal && (
        <>
          <div>Modal</div>
          <input type="text" ref={inputRef} />
          <button onClick={() => setModal(false)}>Close Modal</button>
        </>
      )}
    </div>
  );
};

export default Test;
