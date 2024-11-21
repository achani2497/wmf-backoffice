"use client";
import { useContext, useEffect, useState } from "react";

import EventLayout from "@(general)/events/components/EventLayout";
import { eventos } from "@_shared/export/events";
import { prendas } from "@_shared/export/clothes";
import { harcodedEvent } from "../../../../../constant/general";
import { useGetEvent } from "../../../../../hooks/useGetEvent";
import { SessionContext } from "@contexts/userContext";
import SkeletonLoader from "@_shared/components/SkeletonLoader/SkeletonLoader";

export default function EditEvent({ params }) {
  const onSubmit = (data) => console.log(data);
  const [event, setEvent] = useState({});
  const [clothes, setClothes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { events } = useContext(SessionContext);

  const { data, isLoading } = useGetEvent(
    params.id,
    params.id != harcodedEvent,
  );

  // useEffect(() => {
  //   if (!params.id) return;
  //   const evento = eventos.find((ev) => ev.id == params.id);
  //   setEvent(evento);
  //   console.log(evento);
  //   const ropa = prendas.filter((prenda) => prenda.eventId == evento.id);
  //   setClothes(ropa);
  //   setLoaded(true);
  // }, [params]);

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

  useEffect(() => {
    const eventToSet = eventos.find((evento) => evento.id == params.id);
    setEvent(eventToSet);
  }, [params]);

  return loaded && !isLoading ? (
    <EventLayout
      isEditing
      onSubmit={onSubmit}
      event={event}
      clothes={clothes}
    />
  ) : (
    <SkeletonLoader />
  );
}
