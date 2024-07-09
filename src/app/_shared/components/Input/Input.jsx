import React from "react";
import { useFormContext } from "react-hook-form";

import moment from "moment";

import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { COLORS } from "@_shared/export/constant";

const VALIDATIONS = {
  eventName: {
    required: "El nombre del evento es obligatorio",
    maxLength: {
      value: 30,
      message: "El nombre del evento no puede tener mas de 30 caracteres",
    },
    minLength: {
      value: 5,
      message: "El nombre del evento debe tener al menos 5 caracteres",
    },
  },
  eventDate: {
    validate: (val) => {
      return (
        moment().isBefore(val) ||
        "La fecha del evento debe ser posterior a la fecha actual"
      );
    },
  },
  eventBrand: {
    required: "El nombre de la marca es obligatorio",
    maxLength: {
      value: 30,
      message: "El nombre de la marca no puede tener mas de 30 caracteres",
    },
    minLength: {
      value: 5,
      message: "El nombre de la marca debe tener al menos 5 caracteres",
    },
  },
};

export default function FormInput({
  label,
  fieldId,
  type = "text",
  initialValue = null,
}) {
  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={fieldId}>
        <Typography variant="h6"> {label} </Typography>
      </label>
      <Input
        id={fieldId}
        type={type}
        sx={{ width: "400px" }}
        error={formState.errors[fieldId]?.message}
        {...register(fieldId, { ...VALIDATIONS[fieldId], value: initialValue })}
      />
      {formState.errors[fieldId] && (
        <Typography variant="body1" color={COLORS.RED}>
          {formState.errors[fieldId]?.message}{" "}
        </Typography>
      )}
    </div>
  );
}
