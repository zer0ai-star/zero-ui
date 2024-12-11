"use client"

import { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          query Publication {
            publication(host: "futureoffashion123.hashnode.dev") {
              isTeam
              title
              posts(first: 10) {
                edges {
                  node {
                    title
                    brief
                    url
                           publishedAt
                    coverImage {
                      attribution
                      photographer
                      url
                    }
                    readTimeInMinutes
                    slug
                  }
                }
              }
            }
          }
        `

        const response = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        })

        const data = await response.json()

        if (data.errors) {
          throw new Error(data.errors[0].message)
        }

        const fetchedPosts = data.data.publication.posts.edges.map(
          (edge:any) => edge.node,
        )
        setPosts(fetchedPosts)
        setLoading(false)
      } catch (err:any) {
        setError(err.message || 'Failed to fetch blog posts')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center container mx-auto mb-20">
    <div className="md:text-6xl text-5xl text-center mt-20 mb-10">
      Blogs
    </div>
    {loading && (
        <div className="w-full p-5 text-center">
          <div className="animate-pulse text-gray-500">Loading posts...</div>
        </div>
      )}
    {!loading && !error && (
        <div className="p-5 grid md:grid-cols-3 grid-cols-1 w-full max-w-[1440px] mx-auto gap-7">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      )}
  </div>
  )
}

export default Blogs
