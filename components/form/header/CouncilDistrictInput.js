import styles from './CouncilDistrictInput.module.scss';

export default function CouncilDistrictInput({
    districts,
    setDistrict,
    district
  }) {

  const handler = (e) => {
    setDistrict(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label>Choose your City Council District</label>
      <select
        defaultValue="default"
        required={true}
        onChange={handler}
        value={district ? district : "default"}>
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
