import CustomButton from "@_shared/components/Button/Button";
import CustomModal from "@_shared/components/Modal/Modal";
import Typography from "@mui/material/Typography";

import { COLORS } from "@_shared/export/constant";

export default function DeleteModal({
  open,
  onClose,
  title,
  subtitle,
  onDelete,
}) {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
    >
      <div className="flex gap-4">
        <CustomButton
          variant={"text"}
          color={COLORS.BLACK}
          label={"Cancelar"}
          customClasses={"flex-1 !underline !underline-offset-4"}
          onClick={onClose}
        />
        <CustomButton
          variant={"text"}
          color={COLORS.RED}
          label={"Eliminar"}
          customClasses={"flex-1 !underline !underline-offset-4"}
          onClick={onDelete}
        />
      </div>
    </CustomModal>
  );
}
