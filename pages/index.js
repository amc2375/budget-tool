import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'
import Form from "./components/form.js";

export default function Index() {

  const router = useRouter();
  const selectedInputScheme = router.query["variation"];
  let inputScheme;
  switch(selectedInputScheme) {
    case "A":
      inputScheme = "slider";
      break;
    case "B":
      inputScheme = "percentageAsText";
      break;
    case "C":
      inputScheme = "amountAsText";
      break;
    case "D":
      inputScheme = "incremental";
      break;
    case "E":
      inputScheme = "combo";
      break;
    default:
      inputScheme = "slider";
      break;
  }

  return (
    <Form inputScheme={inputScheme}/>
  );
};
