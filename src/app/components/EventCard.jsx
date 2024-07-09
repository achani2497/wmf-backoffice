import { useCallback } from "react";
import { useRouter } from "next/navigation";

import CustomButton from "@_shared/components/Button/Button";
import CustomCard from "@_shared/components/Card/Card";
import Typography from "@mui/material/Typography";

import { COLORS, ICONS } from "@_shared/export/constant";

export default function EventCard({
  eventId = 1,
  eventName,
  eventDate,
  eventBrand,
}) {
  const router = useRouter();

  const onSeeClothe = useCallback(() => {
    router.push(`/events/${eventId}/clothes`);
  }, [eventId, router]);

  const onEditEvent = useCallback(() => {
    router.push(`/events/${eventId}/edit`);
  }, [eventId, router]);

  const onDeleteEvent = useCallback(() => {
    console.log("Eliminar evento " + eventId);
  }, [eventId]);

  return (
    <CustomCard customClasses={"flex justify-between items-center"}>
      <div className="w-fit flex flex-col gap-4">
        <div className="flex gap-1 items-center">
          <Typography variant="h6" fontWeight={"bold"} alignItems={"center"}>
            Nombre:
          </Typography>
          <Typography variant="h6">{eventName}</Typography>
        </div>
        <div className="flex gap-1 items-center">
          <Typography variant="h6" fontWeight={"bold"} alignItems={"center"}>
            Fecha:
          </Typography>
          <Typography variant="h6">{eventDate}</Typography>
        </div>
        <div className="flex gap-1 items-center">
          <Typography variant="h6" fontWeight={"bold"} alignItems={"center"}>
            Marca:
          </Typography>
          <Typography variant="h6">{eventBrand}</Typography>
        </div>
      </div>
      <div className="flex gap-4">
        <CustomButton
          color={COLORS.VIOLET}
          variant={"outlined"}
          icon={ICONS.CLOTHE}
          label={"Ver prendas"}
          onClick={() => onSeeClothe()}
        />
        <CustomButton
          color={COLORS.LIGHT_BLUE}
          variant={"outlined"}
          icon={ICONS.EDIT}
          label={"Editar evento"}
          onClick={() => onEditEvent()}
        />
        <CustomButton
          color={COLORS.RED}
          variant={"outlined"}
          icon={ICONS.DELETE}
          label={"Eliminar evento"}
          onClick={() => onDeleteEvent()}
        />
      </div>
    </CustomCard>
  );
}
