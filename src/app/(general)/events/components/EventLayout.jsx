import { Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import FormInput from "@_shared/components/Input/Input";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ClotheCard from "@(general)/clothes/components/ClotheCard/ClotheCard";
import SkeletonLoader from "@_shared/components/SkeletonLoader/SkeletonLoader";
import CustomButton from "@_shared/components/Button/Button";
import RedirectButton from "@_shared/components/Button/RedirectButton";
import CustomModal from "@_shared/components/Modal/Modal";
import ClotheForm from "@_shared/components/ClotheForm/ClotheForm";

import { COLORS, ICONS } from "@_shared/export/constant";
import { prendas } from "@_shared/export/clothes";

export default function EventLayout({
  isEditing = false,
  event = {},
  clothes,
  onSubmit = () => {},
}) {
  const methods = useForm({ defaultValues: { ...event } });
  const [clotheToEdit, setClotheToEdit] = useState(null);
  const [createClotheOpen, setCreateClotheModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const onDelete = (clothe) => {
    console.log(clothe);
  };

  const onEdit = (clotheId) => {
    console.log(clothes);
    const clotheToSet = clothes.find((prenda) => prenda.id == clotheId);
    setClotheToEdit(clotheToSet);
    setEditModalOpen(true);
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
              initialValue={event?.brand}
            />
            <div className="flex justify-between">
              <div className="flex gap-8">
                <FormInput
                  label={"Nombre del evento"}
                  fieldId={"eventName"}
                  type="text"
                  sx={{ fontSize: "34px", fontWeight: "500" }}
                  initialValue={event?.name}
                />
                <FormInput
                  label={"Fecha del evento"}
                  fieldId={"eventDate"}
                  type="date"
                  initialValue={event?.date}
                  sx={{ fontSize: "34px", fontWeight: "500" }}
                  width="240px"
                />
              </div>
              <div className="flex gap-4 my-auto">
                <CustomButton
                  variant="contained"
                  color={COLORS.BLACK}
                  label="Guardar"
                  icon={ICONS.SAVE}
                  customClasses="!my-auto"
                />
                <RedirectButton
                  variant={"outlined"}
                  color={COLORS.RED}
                  label={"Cancelar"}
                  url={`/events/${event.id}`}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className="flex flex-col gap-2">
          <Typography variant="h5" className="!tracking-wider !text-[25px]">
            {event.brand}{" "}
          </Typography>
          <div className="flex justify-between">
            <Typography
              variant="h4"
              className="!tracking-normal !text-[34px] !font-medium"
            >
              {`${event.name} - ${event.date}`}
            </Typography>
            <div className="flex gap-4">
              <CustomButton
                variant="contained"
                color={COLORS.BLACK}
                label="Crear prenda"
                icon={ICONS.ADD}
                customClasses="!my-auto"
                onClick={() => setCreateClotheModalOpen(true)}
              />
              <RedirectButton
                variant={"outlined"}
                color={COLORS.BLACK}
                label={"Editar evento"}
                url={`/events/${event.id}/edit`}
              />
            </div>
          </div>
          {/* Create clothe modal */}
          <CustomModal
            open={createClotheOpen}
            onClose={() => setCreateClotheModalOpen(false)}
            title={`Crear prenda`}
          >
            <ClotheForm
              onSubmit={() => console.log("asd")}
              onClose={() => setCreateClotheModalOpen(false)}
            />
          </CustomModal>
          {/* Edit clothe modal */}
          <CustomModal
            open={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            title={`Editar prenda ${clotheToEdit?.name}`}
          >
            <ClotheForm
              clothe={clotheToEdit}
              isEditing
              onSubmit={() => console.log("asd")}
              onClose={() => setEditModalOpen(false)}
            />
          </CustomModal>
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
                    eventId={event.id}
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
