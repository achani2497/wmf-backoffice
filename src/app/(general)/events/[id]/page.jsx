"use client";
import { useContext, useEffect, useState } from "react";

import { eventos } from "@_shared/export/events";
import { prendas } from "@_shared/export/clothes";
import SkeletonLoader from "@_shared/components/SkeletonLoader/SkeletonLoader";
import EventLayout from "../components/EventLayout";
import { SessionContext } from "@contexts/userContext";
import { useGetEvent } from "../../../../hooks/useGetEvent";
import { harcodedEvent } from "../../../../constant/general";

export default function EventsClothes({ params }) {
  const [event, setEvent] = useState({});
  const [clothes, setClothes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { data, isLoading } = useGetEvent(
    params.id,
    params.id != harcodedEvent,
  );

  const { events } = useContext(SessionContext);

  useEffect(() => {
    if (!params.id) return;

    let ropa = [];

    if (data) {
      setEvent(data);
      ropa = data.items;
    } else {
      if (params.id != harcodedEvent) {
        return;
      }
      const evento = events.find((ev) => ev.id == params.id);
      setEvent(evento);
      ropa = prendas.filter((prenda) => prenda.eventId == evento.id);
    }
    setClothes(ropa);
    setLoaded(true);
  }, [data, events, params]);

  return loaded && !isLoading ? (
    <EventLayout event={event} clothes={clothes} />
  ) : (
    <SkeletonLoader />
  );
}
