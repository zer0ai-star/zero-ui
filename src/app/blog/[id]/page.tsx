"use client"
import { Skeleton } from '@/components/ui/skeleton'
import { Book, BookOpen } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const BlogDetail = () => {
  const params  = useParams()
  const navigate = useRouter()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `
          query Publication($slug: String!) {
            publication(host: "futureoffashion123.hashnode.dev") {
              post(slug: $slug) {
                title
                content {
                  html
                }
                coverImage {
                  url
                  photographer
                }
                readTimeInMinutes
              }
            }
          }
        `

        const response = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: {
              slug: params.id,
            },
          }),
        })

        const data = await response.json()

        if (data.errors) {
          throw new Error(data.errors[0].message)
        }

        setPost(data.data.publication.post)
        setLoading(false)
      } catch (err:any) {
        setError(err.message || 'Failed to fetch blog post')
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  console.log(post)
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-14">
      {/* <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-500 hover:text-blue-700 flex items-center gap-2"
      >
        ← Back to posts
      </button> */}

      {loading && (
        <div className="mt-5 flex flex-col space-y-3">
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />
          <Skeleton className="h-[3px] bg-purple-200" />{' '}
          <Skeleton className="h-[7px] bg-purple-200" />{' '}
        </div>
      )}

      {error && (
        <div className="text-red-500 bg-red-50 p-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {!loading && !error && post && (
        <>
          <h1 className="md:text-6xl text-4xl font-bold my-10 text-center">{post.title}</h1>
          {post.readTimeInMinutes && (
            <div className="text-gray-600 mb-4 flex items-center justify-center ">
             <BookOpen className='mr-2 text-purple-900'/> {post.readTimeInMinutes} min read
            </div>
          )}
          {post.coverImage && (
            <div className="relative mb-8">
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              {post.coverImage.photographer && (
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  Photo by {post.coverImage.photographer}
                </div>
              )}
            </div>
          )}
          <div className="prose max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: post.content.html }}
              className="prose max-w-none prose-img:rounded-lg prose-img:w-full prose-a:text-blue-600"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default BlogDetail