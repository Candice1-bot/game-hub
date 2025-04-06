 import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
   id: number;
   name: string;
   background_image: string;
 }
 
 interface FetchGamesResponse {
   count: number;
   results: Game[];
 }
 
 const useGames = () =>{
  const constroller = new AbortController()
  const [error, setError] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("./games", {signal: constroller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
    });

    return () => constroller.abort();
  }, []);

  return {games, error}
 }

 export default useGames;