import Carousel from "react-material-ui-carousel";
import CarousuelImage from "./CarouselImage";

export default function CustomCarousel({
  photos,
  areLocalImages,
  eventId,
  itemId,
}) {
  return (
    <Carousel stopAutoPlayOnHover height={"250px"}>
      {photos.map((photo, index) => {
        return (
          <CarousuelImage
            photo={photo}
            isLocal={areLocalImages}
            key={index}
            eventId={eventId}
            clotheId={itemId}
          />
        );
      })}
    </Carousel>
  );
}
