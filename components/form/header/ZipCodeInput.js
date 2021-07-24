export default function ZipCodeInput({ setZipCode }) {

  const handler = (e) => {
    setZipCode(e.target.value);
  }

  return (
    <div>
      <label>Enter your Zip Code</label>
      <input
        type="text"
        name="zip-code"
        placeholder="10451"
        onChange={handler}>
      </input>
    </div>
  );
};
