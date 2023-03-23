import React from 'react'

function Continer({ dataToShow }) {
    return (
        <div className="container">
            {
                (dataToShow.length > 0) ? (
                    dataToShow.map((e) => {
                        const { DeviceId, DeviceType, Timestamp, location } = e;
                        return (
                            <div className="titles data-p">
                                <p className="id">{DeviceId}</p>
                                <p className="type">{DeviceType}</p>
                                <p className="time">{Timestamp}</p>
                                <p className="location">{location}</p>
                            </div>
                        )
                    })
                ) : (
                    <>
                        <h2>Data Not Found</h2>
                    </>
                )
            }
        </div>
    )
}

export default Continer