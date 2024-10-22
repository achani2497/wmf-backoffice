import Image from "next/image";

import Carousel from "react-material-ui-carousel";

export default function CustomCarousel({ photos }) {
  return (
    <Carousel stopAutoPlayOnHover height={"360px"}>
      {photos.map((photo, index) => {
        return (
          <>
            <Image
              src={`/vestidos/${photo}`}
              width={400}
              height={400}
              alt={`photo${index}`}
              key={index}
              className="!rounded-[5px]"
            />
          </>
        );
      })}
    </Carousel>
  );
}
