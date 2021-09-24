import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image'

type ImageType = {
  allFile: {
    nodes: {
      name: string
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }[]
  }
}

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 300
            height: 300
          )
        }
      }
    }
  }
`
//? 회색 이미지로 변경
// transformOptions: { grayscale: true }

function Gallery() {
  const data = useStaticQuery<ImageType>(query)
  console.log('하하: ', data)
  const nodes = data.allFile.nodes

  return (
    <section className="container flex flex-col mx-auto md:flex-row md:flex-wrap ">
      {nodes.map((image, index) => {
        console.log('image: ', image)
        const pathToImage = getImage(image as unknown as ImageDataLike)
        return (
          <article
            key={index}
            className="flex flex-col items-center md:w-1/2 lg:w-1/3 xl:w-1/4 "
          >
            <GatsbyImage image={pathToImage} alt={image.name} />
            <p>{image.name}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Gallery
