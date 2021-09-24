import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
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

const ComponentName = () => {
  const data = useStaticQuery(getData)

  console.log('data: ', data)

  return (
    <div>
      <h1>Hello Graphql</h1>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => (
          <p key={index}>
            {item.name} : {item.age}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ComponentName
