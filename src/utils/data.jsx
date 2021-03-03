const data = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
  datasets: [
    {
      label: 'Temperature',
      data: [25, 26, 23, 27, 24, 30, 27],
      fill: true,
      backgroundColor: '#e8b6b5',
      borderColor: '#F7544F',
    },
    {
      label: 'Humidity',
      data: [10, 9, 7, 6, 1, 10, 10],
      fill: false,
      borderColor: '#0094FF',
    },
    {
      label: 'Light',
      data: [2, 8, 7, 5, 1, 7, 8],
      fill: false,
      borderColor: '#9BFFBD',
    },
  ],
};

export default data;
