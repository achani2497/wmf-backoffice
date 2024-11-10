import Image from "next/image";

import { useGetImage } from "../../../../hooks/useGetImage";
import { useMemo } from "react";
import Spinner from "../Spinner/spinner";

export default function CarousuelImage({ photo, isLocal, eventId, clotheId }) {
  const { data, isLoading } = useGetImage(eventId, clotheId, !isLocal);

  const imageSrc = useMemo(() => {
    if (isLocal) {
      return `/vestidos/${photo}`;
    } else {
      return data;
    }
  }, [data]);

  return isLoading ? (
    <Spinner
      isLoading={isLoading}
      label={"Cargando imagen"}
      fullHeight={false}
    />
  ) : (
    <Image
      src={imageSrc}
      width={250}
      height={250}
      layout="responsive"
      style={{ width: "100%", height: "auto" }}
      className="!rounded-[5px] self-center"
    />
  );
}
