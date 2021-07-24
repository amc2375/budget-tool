export default function CouncilDistrictInput({
    districts,
    setDistrict
  }) {

  const handler = (e) => {
    setDistrict(e.target.value);
  }

  return (
    <div>
      <label>Choose Your Council District</label>
      <select
        defaultValue="default"
        required={true}
        onChange={handler}>
        <option value="default" disabled>--</option>
        {districts.map(district => (
          <option
            key={district.id}
            value={district.id}>
            {district.district_id ? district.district_id + " - " + district.name : district.name}
          </option>
        ))}
      </select>
    </div>
  );
};
