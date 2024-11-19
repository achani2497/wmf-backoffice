"use client";

import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import FileDropzone from "../Input/DragNDrop";
import FormInput from "@_shared/components/Input/Input";
import CustomButton from "@_shared/components/Button/Button";

import { COLORS, ICONS } from "@_shared/export/constant";
import usePhotosAsFiles from "@hooks/useGetClotheImage";
export default function ClotheForm({ clothe, isEditing, onSubmit, onClose }) {
  const methods = useForm({ defaultValues: { ...clothe } });
  const router = useSearchParams();
  const { filesWithPreviews, loading } = usePhotosAsFiles(clothe?.photos);

  console.log(clothe);

  useEffect(() => {
    if (clothe) {
      methods.reset(clothe);
    }
  }, [clothe, methods]);

  return (
    <div className="flex flex-col items-center gap-2 w-full overflow-scroll">
      {loading ? (
        <>Loading</>
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <FormInput
              label={"Nombre de la prenda:"}
              fieldId={"clotheName"}
              type="text"
              initialValue={clothe?.name}
              customClasses={{ border: "none" }}
              revert
            />
            <FormInput
              label={"Descripción de la prenda:"}
              fieldId={"clotheDescription"}
              type="textarea"
              initialValue={clothe?.description}
              customClasses={{ border: "none" }}
              revert
            />
            <FormInput
              label={"Colección:"}
              fieldId={"clotheCollection"}
              type="text"
              initialValue={clothe?.collection}
              customClasses={{ border: "none" }}
              revert
            />
            <FileDropzone
              control={methods.control}
              name="photos" // Nombre del campo
              sx={{ width: "100%", height: "fit-content" }}
              initialValue={filesWithPreviews || []} // Imagen inicial si está editando
              customClasses="dropzone"
              validations={{
                required: "La imagen de la prenda es obligatoria",
              }}
              formState={methods.formState}
            />
            <div className="flex flex-col gap-4 mt-8 ">
              <CustomButton
                type="submit"
                color={COLORS.BLACK}
                icon={isEditing ? ICONS.SAVE : ICONS.ADD}
                variant={"contained"}
                customClasses={"!w-full"}
                label={isEditing ? "Guardar cambios" : "Crear prenda"}
              />
              <CustomButton
                color={COLORS.RED}
                variant={"outlined"}
                label={"Cancelar"}
                customClasses={"!w-full"}
                onClick={onClose}
              />
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
