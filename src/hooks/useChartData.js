import { useEffect, useState } from 'react';

const useChartData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(json => setDatas(json))
    }, [])
    return [datas, setDatas]
};

export default useChartData;