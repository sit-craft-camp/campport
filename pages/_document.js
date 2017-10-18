import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    return { ...page }
  }

  constructor (props) {
    super(props)

    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>campport</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </html>
    )
  }
}
