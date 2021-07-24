export default function ZipCodeInput() {
  return (
    <div>
      <label>Enter your Zip Code</label>
      <input
        type="text"
        name="zip-code"
        placeholder="10451"
        onChange={handleZipCodeInput}>
      </input>
    </div>
  );
};
