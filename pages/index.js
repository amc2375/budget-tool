import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

// export default function Index() {
//   const { data, error } = useSwr('/api/users', fetcher)

//   if (error) return <div>Failed to load users</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <div>
//     <h1>Test</h1>
//     <ul>
//       {data.map((user) => (
//         <li key={user.name}>
//           <Link href="/user/[id]" as={`/user/${user.name}`}>
//             <a>{`User ${user.name}`}</a>
//           </Link>
//         </li>
//       ))}
//     </ul></div>
//   )
// }

const budgetForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    // Get form data
    let cat_1 = e.currentTarget.cat_1.value;
    let cat_2 = e.currentTarget.cat_2.value;
    console.log(cat_1, cat_2);
  }
  return (
    <div>
      <h1>Fake form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input name="cat_1" type="range" min="1" max="100" value = "30" required />
          </div>
          <div>
            <input name="cat_2" type="number" value = "25" required />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default budgetForm;
