import * as React from "react"
import { graphql, Link } from "gatsby"
import { Bio } from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import TagList from "../components/TagList"
import { useLocalizeData } from "../hooks/useLocalize"
import { ILocation } from "../types/Location"
import { Comments } from "../components/Comments"

const { MDXRenderer } = require("gatsby-plugin-mdx")

interface INode {
  parent: {
    changeTime: Date
    relativeDirectory: string
  }
  body: string
  frontmatter: {
    title: string
    date: Date
    update: Date
    tags: string[]
    spoiler: string
    image: {
      childImageSharp: {
        fluid: any
      }
    }
  }
}
interface IProps {
  location: ILocation
  data: {
    site: {
      siteMetadata: {
        language: string
      }
    }
    allMdx: {
      edges: [
        {
          node: INode
        }
      ]
    }
  }
  pageContext: {
    prev: {
      parent: {
        relativeDirectory: string
      }
      frontmatter: {
        title: string
        tags: string[]
      }
    }
    next: {
      parent: {
        relativeDirectory: string
      }
      frontmatter: {
        title: string
        tags: string[]
      }
    }
  }
}

const BlogPostTemplate: React.FC<IProps> = ({
  data,
  location,
  pageContext,
}) => {
  const lang = data.site.siteMetadata.language
  const localizedData = useLocalizeData()
  const pageData = data.allMdx.edges[0].node
  const title = pageData.frontmatter.title
  const spoiler = pageData.frontmatter.spoiler
  const date = pageData.frontmatter.date
  const { prev, next } = pageContext

  const lastUpdate = localizedData.getLocalizedDate(pageData.parent.changeTime)

  return (
    <Layout location={location}>
      <SEO lang={lang} title={title} description={spoiler} />

      <article className="min-h-screen w-full mx-auto max-w-3xl lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 pt-16 border-b border-gray-200 px-6">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-gray-600 mt-3 mb-8">
          {date &&
            `${localizedData.BlogPost.update}: ${localizedData.getLocalizedDate(
              date
            )}`}
          {lastUpdate && (
            <span className="ml-4">{`${localizedData.BlogPost.lastUpdate}: ${lastUpdate}`}</span>
          )}
        </p>

        <MDXRenderer>{pageData.body}</MDXRenderer>
      </article>
      <div className="w-full mx-auto max-w-3xl lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 pb-40 px-6 pt-4">
        <TagList tags={pageData.frontmatter.tags} />

        <div className="flex flex-row justify-start mt-6 mb-12">
          <Bio />
        </div>

        <nav>
          <div>
            {prev && (
              <>
                <h2 className="text-gray-600 text-md mt-5 break-normal">
                  {localizedData.Archive.prev}
                </h2>
                <Link to={`/blog/${prev.parent.relativeDirectory}`} rel="prev">
                  {prev.frontmatter.title}
                </Link>
              </>
            )}
          </div>

          <div>
            {next && (
              <>
                <h2 className="text-gray-600 text-md mt-5 break-all w-full leading-10">
                  {localizedData.Archive.next}
                </h2>
                <Link to={`/blog/${next.parent.relativeDirectory}`} rel="next">
                  {next.frontmatter.title}
                </Link>
              </>
            )}
          </div>
        </nav>

        <div>
          <Comments />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate
export const query = graphql`
  query BlogPostQuery($slug: String) {
    site {
      siteMetadata {
        language
      }
    }
    allMdx(filter: { id: { eq: $slug } }) {
      edges {
        node {
          parent {
            ... on File {
              changeTime
            }
          }
          frontmatter {
            title
            date
            tags
            spoiler
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          body
        }
      }
    }
  }
`
