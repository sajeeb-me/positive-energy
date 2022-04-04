import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const ChartLine = () => {
    const [datas] = useChartData();
    return (
        <LineChart width={500} height={200} data={datas}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line name="Revenue" type="monotone" dataKey="revenue" stroke="#1E7347" />
        </LineChart>
    );
};

export default ChartLine;