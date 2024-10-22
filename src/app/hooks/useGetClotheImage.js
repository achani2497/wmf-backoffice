import { useState, useEffect } from "react";

function usePhotosAsFiles(photos) {
  const [filesWithPreviews, setFilesWithPreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const convertPhotosToFiles = async () => {
      try {
        const convertedFiles = await Promise.all(
          photos.map(async (photo) => {
            const response = await fetch(`/vestidos/${photo}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch image: ${photo}`);
            }
            const blob = await response.blob();
            const file = new File([blob], photo, { type: blob.type });
            const preview = URL.createObjectURL(blob);

            return {
              file, // Archivo de tipo File
              preview, // URL de vista previa
            };
          }),
        );
        setFilesWithPreviews(convertedFiles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (photos && photos.length > 0) {
      convertPhotosToFiles();
    } else {
      setLoading(false);
    }
  }, [photos]);

  return { filesWithPreviews, loading, error };
}

export default usePhotosAsFiles;
