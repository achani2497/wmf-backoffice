import { useQuery } from "react-query";
import { getFetch } from "../utils/Fetcher";

export const useGetEvent = (id, enabled) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["event", { id }],
    queryFn: () => getFetch(`/api/${id}/event`),
    enabled,
  });

  return {
    data,
    error,
    isLoading,
    isFetching,
  };
};
