"use client";

import { useCallback } from "react";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

import CustomButton from "@_shared/components/Button/Button";
import FormInput from "@_shared/components/Input/Input";

import { COLORS } from "@_shared/export/constant";
import logo from "../../../../public/WMF.svg";

export default function Login() {
  const router = useRouter();
  const methods = useForm();
  const onSubmit = useCallback((data) => router.push("/"), [router]);
  return (
    <FormProvider {...methods}>
      <Image
        src={logo}
        width={410}
        height={200}
        alt="We Move Fashion logo"
        className="self-center"
      />
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-full justify-center items-center flex-1"
      >
        <FormInput label={"Usuario:"} fieldId={"user"} type="text" />
        <FormInput label={"Contraseña:"} fieldId={"password"} type="password" />
        <div className="flex justify-center gap-4 mt-8 ">
          <CustomButton
            type="submit"
            color={COLORS.VIOLET}
            variant={"outlined"}
            label={"Ingresar"}
            customClasses={"!w-[400px]"}
          />
        </div>
      </form>
    </FormProvider>
  );
}
