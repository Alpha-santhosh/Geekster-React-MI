import React, { useMemo, useState } from 'react'
import Continer from './Continer';

function Data({ data }) {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [keyWord, setKeyWord] = useState('');
    const NumOfData = 5;

    const filteredItem = useMemo(() => {
        return data.filter((e) => {
            return e.DeviceId.toLowerCase().includes(keyWord.toLowerCase()) || e.DeviceType.toLowerCase().includes(keyWord.toLowerCase())
        })
    }, [keyWord, data])

    const lastIndex = CurrentPage * NumOfData;
    const firstIndex = lastIndex - NumOfData;
    const dataToShow = filteredItem.slice(firstIndex, lastIndex);
    console.log(dataToShow);

    return (
        <div className="data">
            <h1>GPS Summary</h1>
            <br />
            <div className="top">
                <form >
                    <span className="material-symbols-outlined search">search</span>
                    <input type="text" placeholder='Search by Device Id / Type' onChange={(e) => { setKeyWord(e.target.value) }} />
                </form>
                <div className="rigth__top">
                    <p className='pages'>{CurrentPage} of {Math.ceil(filteredItem.length / NumOfData)}</p>
                    <div className="btns">
                        <button type='button' onClick={() => { if (firstIndex >= NumOfData) { setCurrentPage((prepage) => prepage - 1) } }}><span class="material-symbols-outlined left_arrow">arrow_back_ios_new</span></button>
                        <button type='button' onClick={() => { if (lastIndex <= filteredItem.length) { setCurrentPage((prepage) => prepage + 1) } }}><span class="material-symbols-outlined left_arrow">arrow_forward_ios</span></button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="data__container">
                <div className="titles">
                    <p className='heading'>Device ID</p>
                    <p className='heading'>Device Type</p>
                    <p className='heading'>Timestamp</p>
                    <p className='heading'>Location</p>
                </div>
                <div className="footer">
                    Total-Data : {filteredItem.length}
                </div>
                <Continer dataToShow={dataToShow} />
            </div>
        </div >
    )
}

export default Data