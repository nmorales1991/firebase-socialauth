import React from 'react'
import { Alert } from 'antd';

export default function Errores({mensaje}) {
    return (
        <Alert message={mensaje} type="error" />
    )
}
