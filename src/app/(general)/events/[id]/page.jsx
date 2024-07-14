"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomButton from "@_shared/components/Button/Button";
import ClotheCard from "../../clothes/components/ClotheCard/ClotheCard";

import { eventos } from "@_shared/export/events";
import { COLORS, ICONS } from "@_shared/export/constant";
import { prendas } from "@_shared/export/clothes";
import SkeletonLoader from "@_shared/components/SkeletonLoader/SkeletonLoader";

export default function EventsClothes({ params }) {
  const [event, setEvent] = useState({});
  const [clothes, setClothes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const onDelete = (clothe) => {
    console.log(clothe);
  };

  const onEdit = (clotheId) => {
    console.log(clotheId);
  };

  useEffect(() => {
    if (!params.id) return;
    const evento = eventos.find((ev) => ev.eventId == params.id);
    setEvent(evento);
    const ropa = prendas.filter((prenda) => prenda.eventId == evento.eventId);
    setClothes(ropa);
    setLoaded(true);
  }, [params]);

  return loaded ? (
    <div className="flex flex-col gap-8 w-full">
      <Typography variant="h4">
        {`Prendas del evento ${event.eventName}`}
      </Typography>
      <Link
        href={`/clothes/create?eventId=${event.eventId}`}
        className="self-end"
      >
        <CustomButton
          color={COLORS.GREEN}
          variant={"contained"}
          icon={ICONS.ADD}
          label={"Crear prenda"}
          customClasses={"self-end"}
        />
      </Link>
      <Suspense fallback={<SkeletonLoader />}>
        {clothes?.length ? (
          <Grid container spacing={4}>
            {clothes.map((clothe, index) => {
              return (
                <Grid item sm={6} md={4} xl={3} xs={3} key={index}>
                  <ClotheCard
                    clothe={clothe}
                    onDelete={onDelete}
                    onEdit={onEdit}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography variant="h5" align="center">
            Este evento todavía no tiene prendas
          </Typography>
        )}
      </Suspense>
    </div>
  ) : (
    <SkeletonLoader />
  );
}
