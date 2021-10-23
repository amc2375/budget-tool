import ThankYou from "../components/thankYou/ThankYou.js"
import { createDefaultBudgetValues } from '../utilities/helpers.js';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Viz() {
  const { data, error } = useSwr('/api/thank-you', fetcher)
  if (error) return <div>404: Submission Failed. Try again later.</div>
  if (!data) return <div>Loading...</div>
  return <ThankYou data={data}/>;
};
