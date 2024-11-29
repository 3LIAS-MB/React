import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  // getRandomFact().then(setFact) -> "a veces es mala practica"
  };

  // para cargar por primera vez
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
