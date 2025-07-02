import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PostAdmin from '../../../components/PostAdmin';
import mysql from 'mysql2/promise';

export default function Posts({ initialPosts, totalPosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const filteredPosts = initialPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (postId) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.replace(router.asPath); // Refresh the page
      } else {
        const errorMessage = await response.json();
        console.error('Failed to delete the post:', errorMessage.message);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page }
    });
  };

  return (
    <div className='bg-[#f6f9fff7] blog-admin-sec'>
      <PostAdmin>
        <div className="container mx-auto ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Blog Posts</h2>
            <Link href="/admin/posts/new" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              +
            </Link>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div className="bg-white shadow rounded-lg overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{post.category_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{post.created_at}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link href={`/admin/posts/${post.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">
                        Edit
                      </Link>
                      <Link href={`/blogs/${post.slug}`} className="text-green-600 hover:text-green-900 mr-4 tar" target='_blank'>
                        View
                      </Link>
                      <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <nav className="inline-flex rounded-md shadow">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-l-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 border-t border-b ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-r-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </PostAdmin>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { page = 1 } = context.query;
  const postsPerPage = 10;
  const offset = (page - 1) * postsPerPage;

  try {
    const connection = await mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Get total count
    const [countResult] = await connection.execute(
      'SELECT COUNT(*) as total FROM blog_posts'
    );

    // Get paginated posts
    const [posts] = await connection.execute(`
      SELECT 
        p.*, 
        COALESCE(c.name, 'Uncategorized') AS category_name
      FROM blog_posts p
      LEFT JOIN blog_categories c ON p.category_id = c.id
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `, [postsPerPage, offset]);

    const formattedPosts = posts.map(post => ({
      ...post,
      created_at: post.created_at ? new Date(post.created_at).toISOString().split('T')[0] : null,
      updated_at: post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : null,
      scheduled_for: post.scheduled_for ? new Date(post.scheduled_for).toISOString() : null,
    }));

    return { 
      props: { 
        initialPosts: formattedPosts,
        totalPosts: countResult[0].total 
      } 
    };
  } catch (error) {
    console.error('Database error:', error);
    return { 
      props: { 
        initialPosts: [],
        totalPosts: 0
      } 
    };
  }
}