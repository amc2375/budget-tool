import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'
import Form from "./components/form.js";

export default function Index() {

  const router = useRouter();
  const selectedInputScheme = router.query["scheme"];
  let inputScheme;
  switch(selectedInputScheme) {
    case "slider":
      inputScheme = "slider";
      break;
    case "amountAsText":
      inputScheme = "amountAsText";
      break;
    case "percentageAsText":
      inputScheme = "percentageAsText";
      break;
    case "incremental":
      inputScheme = "incremental";
      break;
    default:
      inputScheme = "slider";
      break;
  }

  return (
    <Form inputScheme={inputScheme}/>
  );
};
