"use client";
import { useEffect, useState } from "react";

import { eventos } from "@_shared/export/events";
import { prendas } from "@_shared/export/clothes";
import SkeletonLoader from "@_shared/components/SkeletonLoader/SkeletonLoader";
import EventLayout from "../components/EventLayout";

export default function EventsClothes({ params }) {
  const [event, setEvent] = useState({});
  const [clothes, setClothes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!params.id) return;
    const evento = eventos.find((ev) => ev.eventId == params.id);
    setEvent(evento);
    const ropa = prendas.filter((prenda) => prenda.eventId == evento.eventId);
    setClothes(ropa);
    setLoaded(true);
  }, [params]);

  return loaded ? (
    <EventLayout event={event} clothes={clothes} />
  ) : (
    <SkeletonLoader />
  );
}
