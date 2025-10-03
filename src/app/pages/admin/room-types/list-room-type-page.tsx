import { RoomTypeList } from "@/features/room-types/components/room-type-list";
import { useRouter } from "next/router";

const SEARCH_PARAM_KEY = "q";

export const ListRoomTypePage = () => {
  const router = useRouter();
  const urlSearchQuery = (router.query[SEARCH_PARAM_KEY] as string) || "";

  const handleQueryChange = (newQuery: string) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, [SEARCH_PARAM_KEY]: newQuery },
    });
  };

  return (
    <RoomTypeList query={urlSearchQuery} onQueryChange={handleQueryChange} />
  );
};
