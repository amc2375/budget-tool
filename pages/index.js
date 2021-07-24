import Link from "next/link";
import React from 'react';
import { useRouter } from 'next/router'
// import Form from "./components/form.js";
import Form from "../components/form/Form.js"
import {
  BRONX_COUNCIL_DISTRICTS,
  BRONX_FY2022_BUDGET
} from "../utilities/constants.js";

export default function Index({ data }) {

  // const router = useRouter();

  return (
    <Form data={data}/>
  );
};

// from https://nextjs.org/docs/basic-features/data-fetching
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

// more technical details: "You should not fetch an API route from
// getStaticProps — instead, you can write the server-side
// code directly in getStaticProps."

// and even more: "When a page with getStaticProps is pre-rendered
// at build time, in addition to the page HTML file, Next.js
// generates a JSON file holding the result of running getStaticProps."
export async function getStaticProps() {

  const data = {
    districts: BRONX_COUNCIL_DISTRICTS,
    categories: BRONX_FY2022_BUDGET
  };

  data.districts.sort((a, b) => alphabetSort(a.district_id, b.district_id));
  data.categories.sort((a, b) => alphabetSort(a.name, b.name));

  data.totalBudget = calculateFixedBudgetAmount(data);

  // By returning { props: { xyz } }, the component
  // will receive `xyz` as a prop at build time
  return {
    props: { data }
  }
}

// sorting data alphabetically
const alphabetSort = (a, b) => (
  (a > b) ? 1 : ((b > a) ? -1 : 0)
);

// calculate the fixed budget amount
const calculateFixedBudgetAmount = (data) => {
  let sum = 0;
  data.categories.forEach(category => {
    sum = sum + category.amount;
  });
  return sum;
};
