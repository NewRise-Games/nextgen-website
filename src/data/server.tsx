import { useEffect, useState } from "react"
import type { ServerProps } from "../components/shared/@types/server";

type APIRESPONSE = {
  servers: ServerProps[];
}

export default function useServer() {

  const [data, setData] = useState<APIRESPONSE | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://raw.githubusercontent.com/Qynor/json/refs/heads/main/README.json');

        if (!res.ok) {
          throw new Error(`HTTP error! -> status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error }
}