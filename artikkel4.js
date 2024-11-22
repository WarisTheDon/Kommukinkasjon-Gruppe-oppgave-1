// Map Center (Norway)


// Event listeners for sidebar and map functionality
document.addEventListener("DOMContentLoaded", function () {
  // Insert navigation HTML
  const navContainer = document.getElementById("klubbkart");
  if (navContainer) {
    navContainer.innerHTML = navHTML;
  }

  // Sidebar toggle elements
  const chapterToggles = document.querySelectorAll(".chapter-toggle");
  const openMenuButton = document.getElementById("open-menu");
  const closeMenuButton = document.getElementById("close-menu");
  const navbar = document.getElementById("navbar");

  // Toggle visibility of subchapters
  chapterToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      this.classList.toggle("active");
      const subChapter = this.nextElementSibling;
      if (subChapter) subChapter.classList.toggle("active");
    });
  });

  // Open and close sidebar functionality
  if (openMenuButton && closeMenuButton && navbar) {
    openMenuButton.addEventListener("click", function () {
      navbar.classList.add("open");
      openMenuButton.classList.add("hidden");
    });

    closeMenuButton.addEventListener("click", function () {
      navbar.classList.remove("open");
      openMenuButton.classList.remove("hidden");
    });
  }

  // Additional sidebar elements
  const toggleButtons = document.querySelectorAll(".unique-toggle");
  const uniqueOpenButton = document.getElementById("unique-open");
  const uniqueCloseButton = document.getElementById("unique-close");
  const uniqueSidebar = document.getElementById("unique-navbar");

  if (uniqueOpenButton && uniqueCloseButton && uniqueSidebar) {
    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.toggle("active");
        const subMenu = this.nextElementSibling;
        if (subMenu) subMenu.classList.toggle("active");
      });
    });

    uniqueOpenButton.addEventListener("click", function () {
      uniqueSidebar.classList.add("open");
      uniqueOpenButton.classList.add("hidden");
    });

    uniqueCloseButton.addEventListener("click", function () {
      uniqueSidebar.classList.remove("open");
      uniqueOpenButton.classList.remove("hidden");
    });
  }
});



am5.ready(function() {

  // Create root element
  var root = am5.Root.new("chartdiv");

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    innerRadius: 80 // Makes it look like a donut chart
  }));

  // Create series
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "size",
    categoryField: "sector"
  }));

  // Set static data
  series.data.setAll([
    { sector: "Arbeid som studentleder", size: 60 },
    { sector: "Reisetid", size: 20 },
    { sector: "Fritid", size: 20 }
  ]);

  // Animate the initial load
  series.appear(1000, 100);

}); // end am5.ready()


const ctx = document.getElementById('gradeChart').getContext('2d');

// Original data for animation
const originalData = [9, 3, 1, 0, 2, 0];

// Initialize the chart variable globally so it can be updated
let gradeChart;

// Function to create the chart
function createChart() {
    gradeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'Stryk'],
            datasets: [{
                label: 'Antall Studenter',
                data: originalData, // Set initial data
                backgroundColor: 'green'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false 
                },
                tooltip: {
                    enabled: false
                },
                datalabels: {
                    color: 'black',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    anchor: 'end',
                    align: 'start',
                    offset: -18,
                    formatter: (value) => value.toString()
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutBounce'
            }
        },
        plugins: [ChartDataLabels]
    });

    // Start the animation cycle
    setTimeout(animateDown, 5000);
}

// Function to animate bars down to zero
function animateDown() {
    gradeChart.data.datasets[0].data = [0, 0, 0, 0, 0, 0]; // Set data to zero
    gradeChart.update({
        duration: 1500,
        easing: 'easeInOutBounce'
    });

    // Wait for the animation to finish, then animate up
    setTimeout(animateUp, 2000); // Adjust this delay as needed for smoother transitions
}

// Function to animate bars back up to original values
function animateUp() {
    gradeChart.data.datasets[0].data = originalData; // Restore original data
    gradeChart.update({
        duration: 1500,
        easing: 'easeInOutBounce'
    });

    // Wait for the animation to finish, then animate down
    setTimeout(animateDown, 5000); // Adjust this delay as needed for smoother transitions
}

// Create the chart initially
createChart();



// Hide the loader after 4 seconds
setTimeout(() => {
  document.querySelector('.loader').classList.add('hidden');
}, 20);




const data = {
  labels: ["Arbeid som studentleder", "Reisetid", "Fritid"],
  datasets: [
    {
      label: "Time Distribution",
      data: [60, 20, 20], // Percentages
      backgroundColor: ["#000000", "#444444", "#888888"], // Clear contrast between segments
      hoverBackgroundColor: ["#222222", "#666666", "#aaaaaa"], // Lighter shades for hover effect
      borderColor: "#ffffff", // White border for better separation
      borderWidth: 3, // Thicker border for visibility
    },
  ],
};

// Options for the pie chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Position of the legend
      labels: {
        color: "#ffffff", // White text for legend
        font: {
          size: 16, // Larger font size for better readability
        },
      },
    },
    tooltip: {
      enabled: true, // Enable tooltips on hover
      callbacks: {
        label: function (context) {
          const label = context.label || "";
          const value = context.raw || 0;
          return `${label}: ${value}%`; // Display percentage in the tooltip
        },
      },
    },
  },
  layout: {
    padding: {
      top: 30,
      bottom: 30,
    },
  },
};

// Create the pie chart
const ctx1 = document.getElementById("newPieChart").getContext("2d");
new Chart(ctx1, {
  type: "pie", // Chart type
  data: data,
  options: options,
});
