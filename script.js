$(window).on("load", init);

function init() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['I have a family doctor',
                'I usually go to walk-in clinics',
                'i go to specialist for my special conditions',
                'I prefer telemedicine consultations',
                'I have never go to a doctor in Canada'
            ],
            datasets: [{
                data: [5, 9, 6, 1, 1],
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


    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['I usually dont have to wait',
                'I usually have to wait less than half an hour',
                'I usually have to wait half an hour to an hour',
                'I usually have to wait one hour to 2 hours',
                'I usually have to wait more than 2 hours',
            ],
            datasets: [{

                data: [0, 2, 5, 8,6],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }

            },
            aspectRatio: 1
        }
    })

    const ctx3 = document.getElementById('myChart3');
    const data3 = [8, 12, 3, 9, 6, 5, 1, 2]; // Your data array
    
    // Function to generate colors for each bar, highlighting the top three in red
    function getColorArrayForBarChart(data) {
        let colors = new Array(data.length).fill('blue'); // Default color for all bars
    
        // Create an array of indexes from the data array
        let indexes = data.map((value, index) => ({value, index}));
        
        // Sort this array based on the value, descending
        indexes.sort((a, b) => b.value - a.value);
        
        // Get the indexes of the top three values
        let topThreeIndexes = indexes.slice(0, 3).map(entry => entry.index);
    
        // Set the color of the top three bars to red
        topThreeIndexes.forEach(index => {
            colors[index] = 'red';
        });
    
        return colors;
    }
    
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [
                'language barrier',
                'the long wait time for walk-in patients',
                'missing your turn when you arrive',
                'cannot get a timely appoint',
                'the hassle of being referred to other specialist',
                'missing calls for the clinics',
                'no frustration.',
                'others'
            ],
            datasets: [{
                label: 'Significant frustrations',
                data: data3,
                backgroundColor: getColorArrayForBarChart(data3), // Use the function to set colors
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
    
    const ctx4 = document.getElementById('myChart4');
    new Chart(ctx4, {
        type: 'bar',
        
        data: {
            labels: [
                '1:Highly disagree',
                '2',
                '3',
                '4',
                '5:Highly agree',

                            ],
            datasets: [{
                                data: [0, 1, 3, 9,8],
                borderWidth: 1
            },
            ]
        },

           
        options: {
            plugins: {
                legend: {
                    display:false
                }
            },
            scales: {

                y: {
                    beginAtZero: true
                }
            }
        }
    })

    const ctx5 = document.getElementById('myChart5');
    new Chart(ctx5, {
        type: 'bar',
        
        data: {
            labels: [
                '1:Highly disagree',
                '2',
                '3',
                '4',
                '5:Highly agree',

                            ],
            datasets: [{
                                data: [0, 2, 9, 6,1],
                borderWidth: 1
            },
            ]
        },

           
        options: {
            plugins: {
                legend: {
                    display:false
                }
            },
            scales: {

                y: {
                    beginAtZero: true
                }
            }
        }
    })
    
    const ctx6 = document.getElementById('myChart6');
    new Chart(ctx6, {
        type: 'bar',
        
        data: {
            labels: [
                '1:Highly disagree',
                '2',
                '3',
                '4',
                '5:Highly agree',

                            ],
            datasets: [{
                                data: [1, 4, 5, 3,1],
                borderWidth: 1
            },
            ]
        },

           
        options: {
            plugins: {
                legend: {
                    display:false
                }
            },
            scales: {

                y: {
                    beginAtZero: true
                }
            }
        }
    })

}