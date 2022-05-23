import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ title, subtitle, children }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <div>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {children}
    </div>
  </>
)