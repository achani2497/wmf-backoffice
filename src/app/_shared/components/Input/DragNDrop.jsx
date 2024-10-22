import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import Image from "next/image";

const FileDropzone = ({
  control,
  name,
  sx,
  width,
  initialValue,
  customClasses,
  validations,
  formState,
}) => {
  const [filePreviews, setFilePreviews] = useState(initialValue || []);

  // Hook useDropzone, fuera del render prop de Controller
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Crear vistas previas para los archivos
      const previews = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFilePreviews((prev) => [...prev, ...previews]);

      // Actualizar el valor del campo en el formulario usando field.onChange más adelante
    },
    accept: "image/*",
    multiple: true, // Habilitar múltiples archivos
  });

  useEffect(() => {
    // Limpiar los previews cuando cambie el valor del formulario o se resetee
    return () => {
      filePreviews.forEach((preview) => URL.revokeObjectURL(preview.preview));
    };
  }, [filePreviews]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={initialValue || []}
      rules={validations}
      render={({ field }) => {
        return (
          <Box
            {...getRootProps()}
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "1rem",
              cursor: "pointer",
              ...sx,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              minHeight: "125px",
            }}
          >
            {/* Input para abrir el buscador de archivos al hacer clic */}
            <input
              {...getInputProps()}
              onChange={(e) => {
                // Cuando se seleccionan archivos manualmente
                const files = Array.from(e.target.files);
                const previews = files.map((file) => ({
                  file,
                  preview: URL.createObjectURL(file),
                }));
                setFilePreviews((prev) => [...prev, ...previews]);
                field.onChange([...field.value, ...files]);
              }}
            />

            {isDragActive ? (
              <Typography variant="body1" color="rgba(0,0,0,.6)">
                Suelta los archivos aquí...
              </Typography>
            ) : (
              <Typography variant="body1" color="rgba(0,0,0,.6)">
                Arrastra y suelta o haz click para seleccionar imágenes
              </Typography>
            )}
            {filePreviews.length > 0 && (
              <Grid container spacing={2}>
                {filePreviews.map((filePreview, index) => (
                  <Grid
                    item
                    direction="column"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      justifyItems: "center",
                      alignContent: "center",
                    }}
                    key={index}
                  >
                    <Image
                      src={filePreview.preview}
                      alt="Vista previa"
                      width={100}
                      height={100}
                      className="rounded-sm shadow-md"
                    />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {filePreview.file.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        );
      }}
    />
  );
};

export default FileDropzone;
