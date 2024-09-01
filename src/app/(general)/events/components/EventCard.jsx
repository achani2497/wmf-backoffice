import { useCallback, useState } from "react";

import RedirectButton from "@_shared/components/Button/RedirectButton";
import CustomCard from "@_shared/components/Card/Card";
import Typography from "@mui/material/Typography";
import DeleteModal from "@_shared/components/DeleteModal/DeleteModal";
import AnimatedButton from "@_shared/components/Button/AnimatedButton";

import { COLORS, ICONS } from "@_shared/export/constant";

export default function EventCard({
  eventId,
  eventName,
  eventDate,
  eventBrand,
}) {
  const [open, setOpen] = useState(false);

  const onDelete = useCallback(() => {
    console.log(`Deleting event ${eventId}`);
  }, [eventId]);

  const handleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <CustomCard
        customClasses={"flex justify-between items-center !rounded-[5px] !px-8"}
      >
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
          <RedirectButton
            color={COLORS.BLACK}
            variant={"contained"}
            icon={ICONS.CLOTHE}
            label={"Ver prendas"}
            url={`/events/${eventId}/`}
          />
          <RedirectButton
            color={COLORS.BLACK}
            variant={"outlined"}
            icon={ICONS.EDIT}
            label={"Editar evento"}
            url={`/events/${eventId}/edit`}
          />
          <AnimatedButton
            label="Eliminar evento"
            onClick={() => handleModal()}
          />
        </div>
      </CustomCard>
      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onDelete={onDelete}
        title={`¿Desea eliminar el evento ${eventName}?`}
        subtitle="Proceder con esta acción elimnará el evento de forma permanente"
      />
    </>
  );
}
