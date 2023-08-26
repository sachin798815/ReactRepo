const FilterExpense = (props) => {
  const filterFunction = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="yearSelector">Select year</label>
      <select
        value={props.selected}
        id="yearSelector"
        name="yearselector"
        onChange={filterFunction}
      >
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default FilterExpense;