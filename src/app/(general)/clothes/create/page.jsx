"use client";

import ClotheForm from "@_shared/components/ClotheForm/ClotheForm";

export default function CreateClothe() {
  const onSubmit = (data) => {
    console.log("CREATE");
    console.log(data);
  };

  return <ClotheForm onSubmit={onSubmit} />;
}
