import Card from "@mui/material/Card";

export default function CustomCard({ children, customClasses, sx }) {
  return (
    <Card
      sx={{
        padding: 3,
        borderRadius: 8,
        width: "100%",
        borderColor: "rgba(0,0,0,.1)",
        borderWidth: 0.7,
        ...sx,
      }}
      className={customClasses}
    >
      {children}
    </Card>
  );
}
