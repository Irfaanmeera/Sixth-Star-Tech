import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import FormAdmin from '../../../components/FormAdmin';
import Link from 'next/link';
import * as XLSX from 'xlsx';

export default function MobileAppForms() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });
  const [nameFilter, setNameFilter] = useState('');

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (!res.ok) throw new Error('Not authenticated');
      setUser(data.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const fetchSubmissions = useCallback(async (page = 1) => {
    setIsFetching(true);
    setError(null);

    try {
      let url = `/api/admin/forms/career-submissions?page=${page}&limit=10`;
      
      // Add date filter if provided
      if (dateFilter.startDate && dateFilter.endDate) {
        url += `&startDate=${dateFilter.startDate}&endDate=${dateFilter.endDate}`;
      }

      // Add name filter if provided
      if (nameFilter) {
        url += `&name=${encodeURIComponent(nameFilter)}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to fetch submissions');

      setSubmissions(data.data || []);
      setTotalPages(data.pagination?.totalPages || 1);
      setCurrentPage(data.pagination?.page || 1);
      setTotalItems(data.pagination?.total || 0);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  }, [dateFilter, nameFilter]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      fetchSubmissions(currentPage);
    }
  }, [user, currentPage, fetchSubmissions]);

  const handleDateFilterChange = (e) => {
    const { name, value } = e.target;
    setDateFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const applyFilters = () => {
    setCurrentPage(1);
    fetchSubmissions(1);
  };

  const clearFilters = () => {
    setDateFilter({
      startDate: '',
      endDate: ''
    });
    setNameFilter('');
    setCurrentPage(1);
    fetchSubmissions(1);
  };

  const exportToExcel = () => {
    // Prepare data for export
    const dataToExport = submissions.map(submission => ({
      Name: submission.name,
      Email: submission.email,
      Phone: submission.phone,
      Position: submission.position,
      Message: submission.message,
      'Submission Date': new Date(submission.submitted_at).toLocaleString()
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    
    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Career Submissions");
    
    // Generate Excel file
    XLSX.writeFile(wb, `career-submissions-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#f6f9fff7]">
      <FormAdmin>
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold p-2">Career Form Submissions</h2>
            <div className="flex gap-2">
              <button
                onClick={exportToExcel}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Export to Excel
              </button>
              <Link href="/admin/forms" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Back to Forms
              </Link>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={nameFilter}
                  onChange={handleNameFilterChange}
                  placeholder="Filter by name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={dateFilter.startDate}
                  onChange={handleDateFilterChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={dateFilter.endDate}
                  onChange={handleDateFilterChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={applyFilters}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {isFetching ? (
            <div className="flex justify-center items-center h-64">
              <div>Loading submissions...</div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {submissions.length > 0 ? (
                        submissions.map((submission) => (
                          <tr key={submission.id || submission.submitted_at}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.position}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.message}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {new Date(submission.submitted_at).toLocaleString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                            No submissions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(currentPage * 10, totalItems)}</span> of{' '}
                  <span className="font-medium">{totalItems}</span> submissions
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  >
                    Previous
                  </button>
                  <div className="flex items-center">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 border rounded mx-1 ${currentPage === pageNum ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <span className="px-2">...</span>
                    )}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-4 py-2 border rounded mx-1 ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                      >
                        {totalPages}
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </FormAdmin>
    </div>
  );
}