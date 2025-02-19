document.addEventListener("DOMContentLoaded", function () {
    function createChart(chartId, score, color) {
        let ctx = document.getElementById(chartId).getContext('2d');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Score', 'Remaining'],
                datasets: [{
                    data: [score, 100 - score], // Score vs Remaining
                    backgroundColor: [color, '#F5F5F5'], // Main Color + Gray for Remaining
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '90%', // Creates the circular ring effect
                plugins: {
                    legend: {
                        display: false // Hide legend
                    },
                    tooltip: {
                        enabled: false // Disable tooltips
                    }
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: function (chart) {
                    let width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;

                    ctx.restore();
                    let fontSize = (height / 8).toFixed(2); // Dynamic font size
                    ctx.font = fontSize + "px Poppins";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";

                    let text = chart.data.datasets[0].data[0] ; // Get score
                    let textX = width / 2;
                    let textY = height / 2;

                    ctx.fillStyle = "black"; // Dark gray color
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        });
    }

    // Example Scores
    createChart('codingChart', 85, '#00e676'); // Green for Coding
    createChart('aptitudeChart', 70, '#FFD700'); // Yellow for Aptitude
    createChart('softSkillsChart', 60, '#FF3D00'); // Red for Soft Skills
});

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".filter");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active"); // Toggle the 'active' class to keep color changed
        });
    });
});

