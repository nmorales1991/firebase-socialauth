import React from 'react'
import { Layout, Spin } from "antd";

export default function Cargando() {
    const { Content } = Layout;
    return (
        <Layout style={{ height: "100vh" }}>
            <Content
                    style={{
                        padding: "0 50px",
                        marginTop: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh"
                    }}
                >
                    <Spin size="large" />
                </Content>
        </Layout>
    )
}
