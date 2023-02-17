const DateSelector = ({ setEndDate, setDate }) => {
  const handleSubmitStart = (event) => {
    event.preventDefault();
    setDate(event.target[0].value);
  };

  const handleSubmitFinish = (event) => {
    event.preventDefault();
    setEndDate(() => {
      return event.target[0].value;
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmitStart}>
        <label htmlFor="selectDate">
          Select your start date (default is 24 hours):{" "}
        </label>
        <input id="selectDate" type="date"></input>
        <button type="submit">Submit the start date for data retrieval</button>
      </form>

      <br></br>

      <form onSubmit={handleSubmitFinish}>
        <label htmlFor="selectFinishDate">
          Select your finish date (default is 24 hours - not required):{" "}
        </label>
        <input id="selectFinishDate" type="date"></input>
        <button type="submit">Submit the end date for data retrieval</button>
      </form>
    </section>
  );
};

export default DateSelector;
