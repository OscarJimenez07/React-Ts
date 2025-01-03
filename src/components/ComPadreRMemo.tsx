import { useState } from "react";
import ComponenteLento from "./ComHijoRMemo";

export default function App() {
  const [contador, setContador] = useState(0);
  const [otraVariable, setOtraVariable] = useState("");

  return (
    <div>
      <ComponenteLento contador={contador} />
      <button onClick={() => setContador((prev) => prev + 1)}>Incrementar</button>
      <input
        type="text"
        value={otraVariable}
        onChange={(e) => setOtraVariable(e.target.value)}
        placeholder="Escribe algo"
      />
    </div>
  );
}
