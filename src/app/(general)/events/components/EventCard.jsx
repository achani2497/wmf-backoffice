import { useCallback, useState } from "react";
import Link from "next/link";

import CustomButton from "@_shared/components/Button/Button";
import CustomCard from "@_shared/components/Card/Card";
import Typography from "@mui/material/Typography";
import DeleteModal from "@_shared/components/DeleteModal/DeleteModal";

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
          <Link href={`/events/${eventId}/`}>
            <CustomButton
              color={COLORS.VIOLET}
              variant={"outlined"}
              icon={ICONS.CLOTHE}
              label={"Ver prendas"}
            />
          </Link>
          <Link href={`/events/${eventId}/edit`}>
            <CustomButton
              color={COLORS.LIGHT_BLUE}
              variant={"outlined"}
              icon={ICONS.EDIT}
              label={"Editar evento"}
            />
          </Link>
          <CustomButton
            color={COLORS.RED}
            variant={"outlined"}
            icon={ICONS.DELETE}
            label={"Eliminar evento"}
            onClick={() => handleModal()}
          />
        </div>
      </CustomCard>
      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onDelete={onDelete}
        title={`¿Desea eliminar el evento ${eventName}?`}
      />
    </>
  );
}
