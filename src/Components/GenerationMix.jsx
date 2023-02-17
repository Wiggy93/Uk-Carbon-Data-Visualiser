import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { getGeneration, getGenerationFrom, getGenerationFromTo } from "../api";

const GenerationMix = ({ powerData, setPowerData, startDate, endDate }) => {
  let chartType = "BarChart";
  let options = {
    title: "Power Generation by Percentage in the last 30 minutes.",
    chartArea: { width: "50%", height: "40%" },
    hAxis: {
      title: "Percentage of Electricity from Fuel",
      minValue: 0,
      titleTextStyle: { color: "beige", bold: true },
    },
    vAxis: {
      title: "Fuel Source",
      titleTextStyle: { color: "beige", bold: true },
    },
    legend: { position: "none" },
    backgroundColor: "transparent",
  };

  if (startDate !== "" && endDate !== "") {
    chartType = "LineChart";
    options.title = options = {
      title: `Power Generation by Percentage between ${startDate} and ${endDate}`,
      chartArea: { width: "50%", height: "40%" },
      hAxis: {
        title: "Time of Day",
        minValue: 0,
        titleTextStyle: { color: "beige", bold: true },
      },
      vAxis: {
        title: "Percentage of mix",
        format: "decimal",
        titleTextStyle: { color: "beige", bold: true },
      },
      legend: { position: "top", maxLines: 5 },
    };
  } else if (startDate !== "") {
    chartType = "LineChart";

    options = {
      title: `Power Generation by Percentage on ${startDate}`,
      chartArea: { width: "50%", height: "40%" },
      hAxis: {
        title: "Time of Day",
        minValue: 0,
      },
      vAxis: {
        title: "Percentage of mix",
        format: "decimal",
      },
      legend: { position: "top", maxLines: 5 },
    };
  }

  useEffect(() => {
    getGeneration()
      .then(({ data }) => {
        return data.generationmix.map((fuel) => {
          return [fuel.fuel, fuel.perc];
        });
      })
      .then((res) => {
        if (startDate === "") {
          const chartData = [["Fuel", "Percentage"], ...res];
          setPowerData(chartData);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [endDate]);

  useEffect(() => {
    getGenerationFrom(startDate)
      .then(({ data }) => {
        return data.map((hour) => {
          const timePoint = hour.to;
          const sourceFor24h = hour.generationmix.map((fuel) => {
            return fuel.perc;
          });
          return [timePoint, ...sourceFor24h];
        });
      })
      .then((res) => {
        const chartDataWithDate = [
          [
            "Time of Day",
            "Biomass",
            "Coal",
            "Imports",
            "Gas",
            "Nuclear",
            "Other",
            "Hydro",
            "Solar",
            "Wind",
          ],
          ...res,
        ];
        setPowerData(chartDataWithDate);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [startDate]);

  useEffect(() => {
    getGenerationFromTo(startDate, endDate)
      .then(({ data }) => {
        return data.map((hour) => {
          const timePoint = hour.to;
          const sourceFor24h = hour.generationmix.map((fuel) => {
            return fuel.perc;
          });
          return [timePoint, ...sourceFor24h];
        });
      })
      .then((res) => {
        const chartDataWithDate = [
          [
            "Time of Day",
            "Biomass",
            "Coal",
            "Imports",
            "Gas",
            "Nuclear",
            "Other",
            "Hydro",
            "Solar",
            "Wind",
          ],
          ...res,
        ];
        setPowerData(chartDataWithDate);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [endDate]);

  return (
    <section>
      <Chart
        data={powerData}
        chartType={chartType}
        width="100%"
        height="800px"
        options={options}
      />
    </section>
  );
};

export default GenerationMix;
