import { useQuery } from "react-query";
import { getFetch } from "../utils/Fetcher";

export const useGetEvents = () => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["events"],
    queryFn: () => getFetch(`/api/scans`),
  });

  return {
    events: data?.events,
    error,
    isLoading,
    isFetching,
  };
};
