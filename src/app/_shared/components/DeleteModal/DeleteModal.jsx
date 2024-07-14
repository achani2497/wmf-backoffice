import CustomButton from "@_shared/components/Button/Button";
import CustomModal from "@_shared/components/Modal/Modal";

import { COLORS, ICONS } from "@_shared/export/constant";

export default function DeleteModal({ open, onClose, title, onDelete }) {
  return (
    <CustomModal open={open} onClose={onClose} title={title}>
      <div className="flex gap-4">
        <CustomButton
          variant={"outlined"}
          color={COLORS.BLUE}
          label={"Cancelar"}
          customClasses={"flex-1"}
          onClick={onClose}
        />
        <CustomButton
          variant={"contained"}
          color={COLORS.RED}
          icon={ICONS.DELETE}
          label={"Eliminar"}
          customClasses={"flex-1"}
          onClick={onDelete}
        />
      </div>
    </CustomModal>
  );
}
