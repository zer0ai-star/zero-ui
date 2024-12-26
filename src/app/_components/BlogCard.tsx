import { Calendar } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const BlogCard = ({ post }:any) => {
  const navigate = useRouter()
  const postId = post.url.split('/').pop()
  return (
    <div
      onClick={() => navigate.push(`/blog/${postId}`)}
      className="cursor-pointer group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="overflow-hidden rounded-t-lg h-48 bg-gray-200">
        {post.coverImage ? (
          <div className="relative h-full">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              height={500}
              width={500}
            />
            {post.coverImage.photographer && (
              <div className="absolute bottom-0 right-0 bg-black/50 text-white text-xs p-1">
                Photo by {post.coverImage.photographer}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>
      <div className="p-4 ">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600  line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.brief}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.readTimeInMinutes} min read</span>
          <span className="text-blue-500 hover:underline">Read more →</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
