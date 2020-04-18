import React from "react";
import { PageHeader, Button } from "antd";
import app from '../firebaseConfig'

export default function Header({titulo,subtitulo}) {
    return (
        <PageHeader
            style={{
                border: "1px solid rgb(235, 237, 240)"
            }}
            title={titulo}
            subTitle={subtitulo}
            extra={[
                <Button onClick={() => app.auth().signOut()} key="logout" type="primary">Cerrar Sesión</Button>,
                
              ]}
        />
    );
}
