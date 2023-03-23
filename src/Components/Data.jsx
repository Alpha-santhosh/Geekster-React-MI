import React, { useMemo, useState } from 'react'
import Continer from './Continer';

function Data({ data }) {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [keyWord, setKeyWord] = useState('');
    const NumOfData = 5;
    const left = "<<";
    const rigth = ">>";

    const filteredItem = useMemo(() => {
        return data.filter((e) => {
            return e.DeviceId.toLowerCase().includes(keyWord.toLowerCase()) || e.DeviceType.toLowerCase().includes(keyWord.toLowerCase())
        })
    }, [keyWord,data])

    const lastIndex = CurrentPage * NumOfData;
    const firstIndex = lastIndex - NumOfData;
    const dataToShow = filteredItem.slice(firstIndex, lastIndex);
    console.log(dataToShow);

    return (
        <div className="data">
            <h1>GPS Summary</h1>
            <br /><br />
            <form>
                <input type="text" placeholder='serach' onChange={(e) => { setKeyWord(e.target.value); setCurrentPage(1) }} />
            </form>
            <div className="titles">
                <p>Device Id</p>
                <p>Device Type</p>
                <p>Timestamp</p>
                <p>location</p>
                <div className='btn__p'>
                    {firstIndex + 1} of {filteredItem.length}
                    <button type='button' onClick={() => { if (firstIndex >= NumOfData) { setCurrentPage((prepage) => prepage - 1) } }}>{left}</button>
                    <button type='button' onClick={() => { if (lastIndex <= filteredItem.length) { setCurrentPage((prepage) => prepage + 1) } }}>{rigth}</button>
                </div>
            </div>
            <Continer dataToShow={dataToShow} />
        </div>
    )
}

export default Data