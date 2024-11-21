"use client";

import { useForm, FormProvider } from "react-hook-form";
import Link from "next/link";

import FormInput from "@_shared/components/Input/Input";
import Typography from "@mui/material/Typography";
import CustomButton from "@_shared/components/Button/Button";

import { COLORS } from "@_shared/export/constant";
import { useEffect } from "react";

export default function EventForm({ event, isEditing, onSubmit }) {
  const methods = useForm({ defaultValues: { ...event } });

  useEffect(() => {
    if (event) {
      methods.reset(event);
    }
  }, [event, methods]);

  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <Typography variant="h3" align="center">
        {isEditing ? `Editar evento ${event?.eventName}` : "Crear un evento"}
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <FormInput
            label={"Nombre del evento:"}
            fieldId={"eventName"}
            type="text"
            initialValue={event?.eventName}
          />
          <FormInput
            label={"Fecha del evento:"}
            fieldId={"eventDate"}
            type="date"
            initialValue={event?.eventDate}
          />
          <FormInput
            label={"Nombre de la marca:"}
            fieldId={"eventBrand"}
            type="text"
            initialValue={event?.eventBrand}
          />
          <div className="flex gap-4 mt-8">
            <Link href={"/"} className="flex-1">
              <CustomButton
                color={COLORS.RED}
                variant={"outlined"}
                label={"Volver"}
                customClasses={"!w-full"}
              />
            </Link>
            <CustomButton
              type="submit"
              color={COLORS.BLACK}
              variant={"contained"}
              label={isEditing ? "Guardar cambios" : "Crear evento"}
              customClasses={"flex-1"}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
