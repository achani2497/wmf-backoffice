import React from "react";
import { useFormContext } from "react-hook-form";
import moment from "moment";

import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

import { COLORS } from "@_shared/export/constant";

const VALIDATIONS = {
  user: {
    required: "El nombre de usuario es obligatorio",
  },
  password: {
    required: "La constraseña es obligatoria",
  },
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
  clotheDescription: {
    required: "La descripción de la prenda es obligatoria",
    maxLength: {
      value: 50,
      message:
        "La descripción de la prenda puede contener 50 caracteres como máximo",
    },
    minLength: {
      value: 5,
      message: "La descripción de la prenda debe tener al menos 5 caracteres",
    },
  },
};

export default function FormInput({
  label,
  fieldId,
  type = "text",
  initialValue = null,
  sx,
  customClasses,
  width = "400px",
}) {
  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      {type == "textarea" ? (
        <TextField
          id={fieldId}
          multiline
          sx={sx}
          rows={6}
          classes={customClasses}
          {...register(fieldId, {
            ...VALIDATIONS[fieldId],
            value: initialValue,
          })}
        />
      ) : (
        <Input
          id={fieldId}
          type={type}
          sx={{ width, ...sx }}
          error={formState.errors[fieldId]?.message}
          classes={customClasses}
          {...register(fieldId, {
            ...VALIDATIONS[fieldId],
            value: initialValue,
          })}
        />
      )}
      <label htmlFor={fieldId}>
        <Typography
          variant="h6"
          className="!text-[14px] !font-light !tracking-wider !-mt-1 text-slate-600"
        >
          {label}
        </Typography>
      </label>
      {formState.errors[fieldId] && (
        <Typography variant="body1" color={COLORS.RED}>
          {formState.errors[fieldId]?.message}{" "}
        </Typography>
      )}
    </div>
  );
}
