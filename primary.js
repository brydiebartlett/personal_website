

const ctx = document.getElementById('spiderChart').getContext('2d');

        const data = {
            labels: ['Skill A', 'Skill B', 'Skill C', 'Skill D', 'Skill E'],
            datasets: [
                {
                    label: 'Person 1',
                    data: [65, 59, 90, 81, 56],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Person 2',
                    data: [28, 48, 40, 19, 96],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        };

        const config = {
            type: 'radar',
            data: data,
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        };

        new Chart(ctx, config);