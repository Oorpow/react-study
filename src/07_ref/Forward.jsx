import React, { forwardRef } from 'react'

const Forward = forwardRef(function (props, ref) {
	return <div>
        <span ref={ref}>Forward</span>
    </div>
})

export default Forward
