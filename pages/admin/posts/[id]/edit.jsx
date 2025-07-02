import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import PostAdmin from '../../../../components/PostAdmin';
import TagManager from '../../../../components/TagManager';

// Dynamically import the RichTextEditor component (fix for window is not defined)
const RichTextEditor = dynamic(() => import('../../../../components/RichTextEditor'), { ssr: false });

export default function EditPost({ post, categories, tags: initialTags }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category_id: '',
    category: '',
    published: false,
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState(initialTags || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      const selectedCategory = categories.find(cat => cat.id === post.category_id);
      setFormData({
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        category_id: post.category_id || '',
        category: selectedCategory ? selectedCategory.name : '',
        published: post.published || false,
      });
      setSelectedTags(post.tags || []);
    }
  }, [post, categories]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'category_id') {
      const selectedCategory = categories.find(cat => cat.id.toString() === value);
      setFormData((prev) => ({
        ...prev,
        category_id: value,
        category: selectedCategory ? selectedCategory.name : '',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, tags: selectedTags }),
      });

      if (!res.ok) throw new Error('Failed to update post');

      router.push('/admin/posts');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostAdmin>
      <div className='blog-admin-sec'>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

          {error && <div className="bg-red-50 text-red-500 p-4 rounded mb-6">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <RichTextEditor value={formData.content} onChange={(content) => setFormData({ ...formData, content })} />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              {formData.category && (
                <p className="mt-2 text-sm text-gray-500">Selected Category: {formData.category}</p>
              )}
            </div>

            {/* Published Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                style={{ width: '15px', height: '15px' }}
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Published</label>
            </div>

            {/* Tags */}
            <div>
              <label className="block mb-2">Tags</label>
              <TagManager selectedTags={selectedTags} availableTags={availableTags} onTagsChange={setSelectedTags} />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={() => router.back()} className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PostAdmin>
  );
}

// ✅ Fetch data in `getServerSideProps`
export async function getServerSideProps({ params }) {
  let connection;
  try {
    const mysql = require('mysql2/promise');
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
    });

    const [posts] = await connection.execute('SELECT * FROM blog_posts WHERE id = ?', [params.id]);
    const [categories] = await connection.execute('SELECT * FROM blog_categories ORDER BY name ASC');
    const [tags] = await connection.execute('SELECT * FROM blog_tags ORDER BY name ASC');

    if (!posts.length) return { notFound: true };

    return {
      props: {
        post: JSON.parse(JSON.stringify(posts[0])),
        categories: JSON.parse(JSON.stringify(categories)),
        tags: JSON.parse(JSON.stringify(tags)),
      },
    };
  } catch (error) {
    console.error('Database error:', error);
    return { props: { post: null, categories: [], tags: [] } };
  } finally {
    if (connection) await connection.end();
  }
}
