"use client";

import { useState, useEffect } from "react";

import ClotheForm from "@_shared/components/ClotheForm/ClotheForm";
import { prendas } from "@_shared/export/clothes";

export default function EditClothe({ params }) {
  const onSubmit = (data) => console.log(data);
  const [clothe, setClothe] = useState({});

  useEffect(() => {
    const clotheToSet = prendas.find((prenda) => prendas.id == params.id);
    setClothe(clotheToSet);
  }, [params]);
  return <ClotheForm clothe={clothe} isEditing onSubmit={onSubmit} />;
}
