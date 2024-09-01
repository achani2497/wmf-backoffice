import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomCard from "@_shared/components/Card/Card";

export default function CustomModal({
  open,
  onClose,
  title,
  subtitle = "",
  children,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ backgroundColor: "rgba(0,0,0,.5)" }}
    >
      <CustomCard
        customClasses={"!w-fit flex flex-col gap-4"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "500px",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          className="!font-bold !tracking-wide"
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" textAlign={"center"}>
            {subtitle}
          </Typography>
        )}
        {children}
      </CustomCard>
    </Modal>
  );
}
