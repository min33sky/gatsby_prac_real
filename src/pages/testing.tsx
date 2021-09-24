import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

type DataType = {
  site: {
    siteMetadata: {
      author
      title
      simpleData
      person: {
        name
        age
      }
      complexData: {
        name
        age
      }
    }
  }
}

function Testing({ data }: PageProps<DataType>) {
  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      siteMetadata {
        author
        title
        simpleData
        person {
          name
          age
        }
        complexData {
          name
          age
        }
      }
    }
  }
`

export default Testing
