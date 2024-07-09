"use client";

import EventForm from "@_shared/components/EventForm/EventForm";

export default function CreateEvent() {
  const onSubmit = (data) => {
    console.log("CREATE");
    console.log(data);
  };

  return <EventForm onSubmit={onSubmit} />;
}
