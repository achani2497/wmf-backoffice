import { useQuery } from "react-query";
import { getFetch } from "../utils/Fetcher";

export const useGetImage = (id, itemId, enabled) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["event", "image", { id, itemId }],
    queryFn: () => getFetch(`/api/${id}/event/${itemId}`),
    enabled,
  });

  return {
    data,
    error,
    isLoading,
    isFetching,
  };
};
