import { Button, Typography } from 'antd'
import React from 'react'

const {Title} = Typography

export default function LandingPage() {
  return (
    <div>
        <Title level={5}>Halaman Landing Page</Title>
        <Button type='primary'>Login</Button>
    </div>
  )
}
