import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import CustomButton from "@_shared/components/Button/Button";
import CustomCard from "@_shared/components/Card/Card";
import CustomCarousel from "@_shared/components/Carousel/Carousel";
import DeleteModal from "@_shared/components/DeleteModal/DeleteModal";

import { COLORS, ICONS } from "@_shared/export/constant";

export default function ClotheCard({ clothe }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onDelete = useCallback(() => {
    console.log(`Deleting ${clothe.id}`);
  }, [clothe]);

  return (
    <>
      <CustomCard customClasses={"flex flex-col gap-4"}>
        <div className="flex flex-col gap-4">
          <CustomCarousel photos={clothe.photos} />
          <Typography variant="h5">{clothe.name}</Typography>
          <Typography variant="body1">{clothe.description}</Typography>
        </div>
        <div className="flex gap-4 !flex-wrap">
          <CustomButton
            variant={"outlined"}
            color={COLORS.RED}
            icon={ICONS.DELETE}
            label={"Borrar prenda"}
            customClasses={"flex-1"}
            onClick={() => setOpen(true)}
          />
          <Link
            href={`/clothes/${clothe.id}/edit?eventId=${clothe.eventId}`}
            className="flex-1"
          >
            <CustomButton
              variant={"contained"}
              color={COLORS.BLUE}
              icon={ICONS.EDIT}
              label={"Editar prenda"}
              customClasses={"flex-1 !w-full"}
            />
          </Link>
        </div>
      </CustomCard>
      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onDelete={onDelete}
        title={`¿Desea eliminar la prenda ${clothe.name}?`}
      />
    </>
  );
}
