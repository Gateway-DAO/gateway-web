import React, { useState, useEffect } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

const AddNewKey = (props) => {
    const { gateData } = useOutletContext()

    return <Outlet context={{
        gateData
    }} />
}

export default AddNewKey
