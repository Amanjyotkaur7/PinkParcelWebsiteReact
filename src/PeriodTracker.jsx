import React, { useState } from 'react';
import './PeriodTracker.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function PeriodTracker() {
    const [lastPeriod, setLastPeriod] = useState('');
    const [cycleLength, setCycleLength] = useState('');
    const [nextPeriod, setNextPeriod] = useState('');
    const [cycleHistory, setCycleHistory] = useState([]);
    const [ovulationDate, setOvulationDate] = useState('');
    const [predictionAccuracy, setPredictionAccuracy] = useState('');
    const [graphData, setGraphData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Cycle Lengths (days)',
                data: [],
                borderColor: '#FF6F61',
                backgroundColor: '#FF6F61',
                fill: false,
                tension: 0.1
            }
        ]
    });

    const handleCalculate = () => {
        if (!lastPeriod || !cycleLength || isNaN(cycleLength)) {
            alert('Please enter valid details!');
            return;
        }

        const lastDate = new Date(lastPeriod);
        const predictedDate = new Date(lastDate.setDate(lastDate.getDate() + parseInt(cycleLength, 10)));
        const ovulationPredicted = new Date(lastDate.setDate(lastDate.getDate() + parseInt(cycleLength, 10) - 14));

        setNextPeriod(predictedDate.toISOString().split('T')[0]);
        setOvulationDate(ovulationPredicted.toISOString().split('T')[0]);

        // Save this cycle in the history
        const newCycle = {
            lastPeriod: lastPeriod,
            cycleLength: cycleLength,
            nextPeriod: predictedDate.toISOString().split('T')[0],
            ovulationDate: ovulationPredicted.toISOString().split('T')[0]
        };

        setCycleHistory((prevHistory) => [...prevHistory, newCycle]);

        // Update graph data
        setGraphData((prevData) => ({
            ...prevData,
            labels: [...prevData.labels, `Cycle ${prevData.labels.length + 1}`],
            datasets: [
                {
                    ...prevData.datasets[0],
                    data: [...prevData.datasets[0].data, parseInt(cycleLength, 10)]
                }
            ]
        }));
    };

    const handleAccuracy = (accuracy) => {
        setPredictionAccuracy(accuracy);
    };

    return (
        <div className="period-tracker">
            <h1>Period Tracker</h1>
            <div className="input-group">
                <label htmlFor="lastPeriod">Last Period Date:</label>
                <input
                    type="date"
                    id="lastPeriod"
                    value={lastPeriod}
                    onChange={(e) => setLastPeriod(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="cycleLength">Average Cycle Length (days):</label>
                <input
                    type="number"
                    id="cycleLength"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                />
            </div>
            <button onClick={handleCalculate} className="calculate-btn">
                Calculate Next Period
            </button>

            {nextPeriod && (
                <div className="result">
                    <h2>Your Next Period Date: {nextPeriod}</h2>
                    <h3>Ovulation Prediction: {ovulationDate}</h3>
                    <div className="accuracy">
                        <label>Was this prediction accurate?</label>
                        <button onClick={() => handleAccuracy('Accurate')}>Yes</button>
                        <button onClick={() => handleAccuracy('Inaccurate')}>No</button>
                        {predictionAccuracy && <p>Prediction was: {predictionAccuracy}</p>}
                    </div>
                </div>
            )}

            <div className="cycle-history">
                <h2>Cycle History</h2>
                {cycleHistory.length > 0 ? (
                    <ul>
                        {cycleHistory.map((cycle, index) => (
                            <li key={index}>
                                <div className="cycle-card">
                                    <strong>Cycle {index + 1}</strong>
                                    <p>Last Period: {cycle.lastPeriod}</p>
                                    <p>Cycle Length: {cycle.cycleLength} days</p>
                                    <p>Next Period: {cycle.nextPeriod}</p>
                                    <p>Ovulation Date: {cycle.ovulationDate}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No cycles recorded yet.</p>
                )}
            </div>

            {graphData.labels.length > 1 && (
                <div className="cycle-graph">
                    <h2>Cycle Length History</h2>
                    <Line data={graphData} />
                </div>
            )}

            
        </div>
        
    );
    
}

export default PeriodTracker;
