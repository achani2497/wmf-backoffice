import { eventos } from "@_shared/export/events";

const { createContext, useState, useCallback, useMemo } = require("react");

export const SessionContext = createContext({
  events: [],
  addNewEvents: () => {},
});

const SessionProvider = ({ children }) => {
  const [events, setEvents] = useState([...eventos]);

  const addNewEvents = useCallback((newEvents) => {
    setEvents((prevEvents) => {
      // Creamos un Set con los IDs de los eventos existentes
      const existingEventIds = new Set(prevEvents.map((event) => event.id));

      // Filtramos los nuevos eventos para agregar solo los que no estén en el Set
      const uniqueNewEvents = newEvents.filter(
        (event) => !existingEventIds.has(event.id),
      );

      // Retornamos la combinación de eventos previos y nuevos únicos
      return [...prevEvents, ...uniqueNewEvents];
    });
  }, []);

  const value = useMemo(
    () => ({
      events,
      addNewEvents,
    }),
    [events, addNewEvents],
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionProvider;
