import React, { useState } from 'react';
import { useRouter } from 'next/router';
import mysql from 'mysql2/promise';
import AdminLayout from '../../../components/AdminLayout';

function NewPost({ categories }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category_id: '',
    category: '', // ✅ added
    featured_image: '',
    author: '',
    author_bio: '',
    published: false,
    scheduled_for: '',
    status: 'draft',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ updated to also set category_name
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'category_id') {
      const selectedCategory = categories.find(cat => cat.id.toString() === value);
      setFormData((prev) => ({
        ...prev,
        category_id: value,
        category: selectedCategory ? selectedCategory.name : '', // ✅ also store name
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
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) router.push('/admin/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='blog-admin-sec bg-[#f6f9fff7]'>
      <AdminLayout>
        <div className="max-w-4xl mx-auto pt-[20px]">
          <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: 'Title', name: 'title', type: 'text', required: true },
              { label: 'Slug', name: 'slug', type: 'text' },
              { label: 'Description', name: 'excerpt', type: 'textarea' },
              { label: 'Content', name: 'content', type: 'textarea', required: true },
              { label: 'Featured Image URL', name: 'featured_image', type: 'text' },
              { label: 'Author', name: 'author', type: 'text' },
              { label: 'Author Bio', name: 'author_bio', type: 'text' },
              { label: 'Scheduled For', name: 'scheduled_for', type: 'datetime-local' },
            ].map(({ label, name, type, required }) => (
              <div key={name}>
                <label className="block mb-2">{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows={name === 'content' ? '10' : '3'}
                    required={required}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required={required}
                  />
                )}
              </div>
            ))}

            <div>
              <label className="block mb-2">Category</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                style={{ width: '15px', height: '15px' }}
              />
              <label htmlFor="published" className="ml-2 block text-sm">Published</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
    });

    const [categoriesResult] = await connection.execute(
      'SELECT id, name FROM blog_categories WHERE name IS NOT NULL'
    );
    const categories = categoriesResult.map(row => ({ id: row.id, name: row.name }));
    await connection.end();

    return { props: { categories: JSON.parse(JSON.stringify(categories)) } };
  } catch (error) {
    console.error('Database connection failed:', error);
    return { props: { categories: [] } };
  }
}

export default NewPost;
