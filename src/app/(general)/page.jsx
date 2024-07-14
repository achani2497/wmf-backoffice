"use client";

import CustomButton from "@_shared/components/Button/Button";
import { COLORS, ICONS } from "@_shared/export/constant";
import EventCard from "@(general)/events/components/EventCard";
import Link from "next/link";

import { eventos } from "@_shared/export/events";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 items-start">
        <Link href={"/events/create"}>
          <CustomButton
            color={COLORS.GREEN}
            variant={"contained"}
            icon={ICONS.ADD}
            label={"Agregar evento"}
          />
        </Link>

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
