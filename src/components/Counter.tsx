import { useState } from "react";
import "./Counter.css";

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState<number>(initialValue);
  const [step, setStep] = useState<number>(1);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialValue);

  return (
    <div className="counter-container">
      <h2>카운터 예제</h2>
      <p className="description">
        TypeScript로 타입 안전성을 보장하는 간단한 카운터입니다.
      </p>

      <div className="counter-display">
        <div className="count-value">{count}</div>
      </div>

      <div className="step-control">
        <label htmlFor="step">증감 단위:</label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
        />
      </div>

      <div className="button-group">
        <button onClick={decrement} className="btn btn-decrement">
          - {step}
        </button>
        <button onClick={reset} className="btn btn-reset">
          초기화
        </button>
        <button onClick={increment} className="btn btn-increment">
          + {step}
        </button>
      </div>

      <div className="info-box">
        <h3>타입 정보</h3>
        <pre>{`interface CounterProps {
  initialValue?: number
}

const [count, setCount] = useState<number>(initialValue)
const [step, setStep] = useState<number>(1)`}</pre>
      </div>
    </div>
  );
};

export default Counter;
