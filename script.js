// JavaScript for BMI Calculator

// Function to generate random data for 20 years
function generateData() {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    const height = Math.floor(Math.random() * (200 - 100) + 100); // Random height between 100 and 200 cm
    const weight = Math.floor(Math.random() * (150 - 50) + 50); // Random weight between 50 and 150 kg
    const bmi = calculateBMI(height, weight);
    data.push({ year: i, height, weight, bmi });
  }
  localStorage.setItem('bmiData', JSON.stringify(data));
  window.location.href = 'results.html';
}

// Function to calculate BMI
function calculateBMI(height, weight) {
  return (weight / ((height / 100) * (height / 100))).toFixed(2);
}

// Function to display BMI data as a graph
function displayGraph() {
  const data = JSON.parse(localStorage.getItem('bmiData'));
  const years = data.map(item => item.year);
  const bmis = data.map(item => item.bmi);

  const ctx = document.getElementById('bmiChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'BMI',
        data: bmis,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
