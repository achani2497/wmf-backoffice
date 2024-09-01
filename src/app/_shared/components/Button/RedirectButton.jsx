import Link from "next/link";
import CustomButton from "./Button";

export default function RedirectButton({ url, color, variant, icon, label }) {
  return (
    <Link href={url}>
      <CustomButton color={color} variant={variant} icon={icon} label={label} />
    </Link>
  );
}
