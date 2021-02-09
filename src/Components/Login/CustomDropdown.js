import React, { useState } from 'react'

export default function CustomDropdown (props) {

    const [isActive, setIsActive] = useState(false)

    let listStyle = {
        display: "none"
    }

    if(isActive){
        listStyle.display = "block"
    }

    return (
        <div className={"dropdownCont"}>
            <div className={"inputCont"}>
                <span className="arrow arrow-bottom"/>
                <input type={"text"} name={props.name} placeholder={props.placeholder} className={"regInp"} id={"dropDownInp"}
                       value={props.value}
                       readOnly={"readOnly"}
                       onClick={() => setIsActive(!isActive)}/>
            </div>
            <div className={"dropDownList"} style={listStyle}>
                {props.list.map(item => {
                    return <p onClick={() => {
                        props.setValue(props.name, item.name);
                        setIsActive(false);
                    }}>{item.name}</p>
                })}
            </div>
        </div>
    )
}