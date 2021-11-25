import React from 'react'
const years = [
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
  ];

function Selection(props) {
    return (
        <>
            <div className="container-text-center">
                <div>
                    <label className="m-1">From</label>
                    <select className=" m-1 " name="yearFrom" value={props.yearFrom} onChange={props.onChangeYear}>
                    {years.map((y) => {
                        return (
                        <option key={y} value={y}>
                            {y}
                        </option>
                        );
                    })}
                    </select>
                    <label className="m-1">to</label>
                    <select className="listbox-area m-1 " name="yearTo" value={props.yearTo} onChange={props.onChangeYear}>
                    {years.map((y) => {
                        return (
                        <option key={y} value={y}>
                            {y}
                        </option>
                        );
                    })}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Selection
