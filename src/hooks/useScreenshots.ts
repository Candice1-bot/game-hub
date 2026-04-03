import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";

import APIClient from "../services/api-client";

const useScreenShot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShot;
