import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const ChartBar = () => {
    const [datas] = useChartData();
    return (
        <BarChart width={500} height={200} data={datas}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar name="Sells" dataKey="sell" fill="#8884d8" />
        </BarChart>
    );
};

export default ChartBar;