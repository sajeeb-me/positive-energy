import React from 'react';
import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const ChartArea = () => {
    const [datas] = useChartData();
    return (
        <AreaChart width={730} height={250} data={datas}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Area type="monotone" name='Investment' dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" name='Revenue' dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    );
};

export default ChartArea;