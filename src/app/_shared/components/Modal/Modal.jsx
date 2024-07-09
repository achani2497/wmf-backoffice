import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomCard from "@_shared/components/Card/Card";

export default function CustomModal({ open, handleModal, title, children }) {
  return (
    <Modal open={open} onClose={handleModal}>
      <CustomCard
        customClasses={"!w-fit flex flex-col gap-12"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "550px",
        }}
      >
        <Typography variant="h4" align="center">
          {title}
        </Typography>
        {children}
      </CustomCard>
    </Modal>
  );
}
