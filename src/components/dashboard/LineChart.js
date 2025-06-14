import React, { useRef, useEffect } from 'react'
import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js'
import 'chartjs-adapter-moment'

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip)

function LineChart01({
  data,
  width,
  height
}) {

  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        chartArea: {
          backgroundColor: "rgb(94 234 212)",
        },
        layout: {
          padding: 22,
        },
        scales: {
          y: {
            grid: { display: false },
            beginAtZero: true,
            title: "Score"
          },
          x: {
            grid: { display: false },
            type: "time",
            time: {
              unit: 'month'
          }
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
            },
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
        // resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas ref={canvas} width={width} height={height}></canvas>
  );
}

export default LineChart01;