import ThankYou from "../components/thankYou/ThankYou.js"
import { createDefaultBudgetValues } from '../utilities/helpers.js';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Viz() {
  const { data, error } = useSwr('/api/thank-you', fetcher)
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  return <ThankYou data={data}/>;
};
