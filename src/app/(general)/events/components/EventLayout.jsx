import { Suspense, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import FormInput from "@_shared/components/Input/Input";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ClotheCard from "@(general)/clothes/components/ClotheCard/ClotheCard";
import SkeletonLoader from "@_shared/components/SkeletonLoader/SkeletonLoader";

export default function EventLayout({
  isEditing = false,
  event = {},
  clothes,
  onSubmit = () => {},
}) {
  const methods = useForm({ defaultValues: { ...event } });

  const onDelete = (clothe) => {
    console.log(clothe);
  };

  const onEdit = (clotheId) => {
    console.log(clotheId);
  };

  useEffect(() => {
    if (event) {
      methods.reset(event);
    }
  }, [event, methods]);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Info evento */}
      {isEditing ? (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormInput
              label={"Nombre de la marca"}
              fieldId={"eventBrand"}
              type="text"
              sx={{ fontSize: "25px", fontWeight: "400" }}
              initialValue={event?.eventBrand}
            />
            <div className="flex gap-8">
              <FormInput
                label={"Nombre del evento"}
                fieldId={"eventName"}
                type="text"
                sx={{ fontSize: "34px", fontWeight: "500" }}
                initialValue={event?.eventName}
              />
              <FormInput
                label={"Fecha del evento"}
                fieldId={"eventDate"}
                type="date"
                initialValue={event?.eventDate}
                sx={{ fontSize: "34px", fontWeight: "500" }}
                width="240px"
              />
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className="flex flex-col gap-2">
          <Typography variant="h5" className="!tracking-wider !text-[25px]">
            {event.eventBrand}{" "}
          </Typography>
          <Typography
            variant="h4"
            className="!tracking-normal !text-[34px] !font-medium"
          >
            {`${event.eventName} - ${event.eventDate}`}
          </Typography>
        </div>
      )}
      <Suspense fallback={<SkeletonLoader />}>
        {clothes?.length ? (
          <Grid container spacing={4}>
            {clothes.map((clothe, index) => {
              return (
                <Grid item sm={6} md={4} xl={4} xs={4} key={index}>
                  <ClotheCard
                    clothe={clothe}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    editingEvent={isEditing}
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
  );
}
