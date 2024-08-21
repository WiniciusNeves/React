import React from "react/lib/React";

export default props => {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}