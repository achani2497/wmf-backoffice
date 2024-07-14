"use client";

import EventForm from "@_shared/components/EventForm/EventForm";
import { eventos } from "@_shared/export/events";
import { useEffect, useState } from "react";

export default function EditEvent({ params }) {
  const onSubmit = (data) => console.log(data);
  const [event, setEvent] = useState({});

  useEffect(() => {
    const eventToSet = eventos.find((evento) => evento.eventId == params.id);
    setEvent(eventToSet);
  }, [params]);

  return <EventForm isEditing onSubmit={onSubmit} event={event} />;
}
