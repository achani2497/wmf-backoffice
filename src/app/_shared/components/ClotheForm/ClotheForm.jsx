"use client";

import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import FormInput from "@_shared/components/Input/Input";
import Typography from "@mui/material/Typography";
import CustomButton from "@_shared/components/Button/Button";

import { COLORS, ICONS } from "@_shared/export/constant";

export default function ClotheForm({ clothe, isEditing, onSubmit }) {
  const methods = useForm({ defaultValues: { ...clothe } });
  const router = useSearchParams();
  const eventId = router.get("eventId");

  useEffect(() => {
    if (clothe) {
      methods.reset(clothe);
    }
  }, [clothe, methods]);

  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <Typography variant="h3" align="center">
        {isEditing ? `Editar prenda ${clothe?.name}` : "Crear una prenda"}
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-10 w-full"
        >
          <FormInput
            label={"Descripción de la prenda:"}
            fieldId={"clotheDescription"}
            type="textarea"
            initialValue={clothe?.description}
            customClasses={{ border: "none" }}
          />
          <FormInput
            label={"Fotos de la prenda:"}
            fieldId={"eventDate"}
            type="file"
            initialValue={clothe?.phothos}
            sx={{
              width: "100%",
              height: "300px",
            }}
          />
          <div className="flex justify-center gap-4 mt-8 ">
            <Link href={`/events/${eventId}`}>
              <CustomButton
                color={COLORS.RED}
                variant={"outlined"}
                label={"Volver"}
              />
            </Link>
            <CustomButton
              type="submit"
              color={COLORS.GREEN}
              icon={ICONS.ADD}
              variant={"contained"}
              label={isEditing ? "Guardar cambios" : "Crear prenda"}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
