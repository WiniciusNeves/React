import React from "react";

export default prop => {
    return (
        <div>
            {React.Children.map(prop.children, child => {
                return React.cloneElement(child, { ...prop })
            })}
        </div>


    )
}