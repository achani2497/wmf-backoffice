"use client";

import RedirectButton from "@_shared/components/Button/RedirectButton";
import { COLORS, ICONS } from "@_shared/export/constant";
import EventCard from "@(general)/events/components/EventCard";

import { useGetEvents } from "../../hooks/useGetEvents";
import Spinner from "@_shared/components/Spinner/spinner";
import { useContext, useEffect, useState } from "react";
import { eventos } from "@_shared/export/events";
import { SessionContext } from "@contexts/userContext";

export default function Home() {
  const { events: fetchedEvents, isLoading, isFetching } = useGetEvents();
  const [mappedEvents, setMappedEvents] = useState([]);
  const { events, addNewEvents } = useContext(SessionContext);

  useEffect(() => {
    if (fetchedEvents) {
      addNewEvents(fetchedEvents);
    } else {
      setMappedEvents(eventos);
    }
  }, [fetchedEvents, addNewEvents]);

  if (isLoading || isFetching) {
    return <Spinner label={"Cargando eventos"} isLoading={isLoading} />;
  }

  return (
    <>
      <div className="flex flex-col gap-8 items-start flex-1">
        <RedirectButton
          color={COLORS.BLACK}
          variant={"contained"}
          icon={ICONS.ADD}
          label={"Agregar evento"}
          url={"/events/create"}
        />
        {events.map((evento, index) => {
          return (
            <EventCard
              eventId={evento.id}
              eventName={evento.name}
              eventDate={evento.date}
              eventBrand={evento.brand || evento.collection || evento.name}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
