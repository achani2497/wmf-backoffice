"use client";

import CustomButton from "@_shared/components/Button/Button";
import { COLORS, ICONS } from "@_shared/export/constant";
import EventCard from "@components/EventCard";
import { useRouter } from "next/navigation";

import { eventos } from "@_shared/export/events";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-8 items-start">
        <CustomButton
          color={COLORS.GREEN}
          variant={"outlined"}
          icon={ICONS.ADD}
          label={"Agregar evento"}
          customClasses={"self-end"}
          onClick={() => router.push("/events/create")}
        />

        {eventos.map((evento, index) => {
          return (
            <EventCard
              eventId={evento.eventId}
              eventName={evento.eventName}
              eventDate={evento.eventDate}
              eventBrand={evento.eventBrand}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
