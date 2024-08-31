"use client";
import { useEffect, useState } from "react";

import EventLayout from "@(general)/events/components/EventLayout";
import { eventos } from "@_shared/export/events";
import { prendas } from "@_shared/export/clothes";

export default function EditEvent({ params }) {
  const onSubmit = (data) => console.log(data);
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

  useEffect(() => {
    const eventToSet = eventos.find((evento) => evento.eventId == params.id);
    setEvent(eventToSet);
  }, [params]);

  return (
    <EventLayout
      isEditing
      onSubmit={onSubmit}
      event={event}
      clothes={clothes}
    />
  );
}
