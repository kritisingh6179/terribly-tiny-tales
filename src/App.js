import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { CSVLink } from "react-csv";
import { BarController, BarElement, CategoryScale, LinearScale, Chart } from 'chart.js';


Chart.register(LinearScale,CategoryScale,BarElement,BarController);

function App() {
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    const words = text.split(/\s+/);
    const counts = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const topWords = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .reduce((acc, [word, count]) => {
        acc[word] = count;
        return acc;
      }, {});
    setData(topWords);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {data && (
        <div>
          <Bar type="bar"
            data={{
              labels: Object.keys(data),
              datasets: [
                {
                  label: "Frequency",
                  data: Object.values(data),
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  type: "category",
                  ticks: {
                    beginAtZero: true,
                  },
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
          <CSVLink data={Object.entries(data)} filename={"histogram.csv"}>
            Export
          </CSVLink>
        </div>
      )}
    </div>
  );
}
export default App;
