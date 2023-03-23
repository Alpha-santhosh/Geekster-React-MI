import React from 'react'

function Continer({dataToShow}) {
    return (
        <div className="container">
            {
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
            }
        </div>
    )
}

export default Continer