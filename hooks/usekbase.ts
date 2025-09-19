import { useState, useEffect, useCallback } from 'react';

interface KnowledgeBaseEntry {
  id: string;
  title?: string;
  rawText?: string;
  filename?: string;
  stage: 'raw' | 'processed' | 'vector';
  createdAt: string;
  size?: number;
}

export const useKnowledgeBase = () => {
  const [entries, setEntries] = useState<KnowledgeBaseEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/knowledge-base');
      const data = await response.json();

      if (data.success) {
        setEntries(data.entries || []);
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addEntry = useCallback(async (rawText: string, title?: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/knowledge-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawText, title }),
      });

      const data = await response.json();

      if (data.success) {
        await fetchEntries();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Network error' };
    } finally {
      setLoading(false);
    }
  }, [fetchEntries]);

  const updateEntry = useCallback(async (id: string, rawText: string, title?: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/knowledge-base/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawText, title }),
      });

      const data = await response.json();

      if (data.success) {
        await fetchEntries();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Network error' };
    } finally {
      setLoading(false);
    }
  }, [fetchEntries]);

  const deleteEntry = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/knowledge-base/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        await fetchEntries();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: 'Network error' };
    } finally {
      setLoading(false);
    }
  }, [fetchEntries]);

  const uploadFile = useCallback(async (file: File) => {
    setLoading(true);
    try {
      // Get upload URL
      const urlResponse = await fetch('/api/knowledge-base/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name }),
      });

      const urlData = await urlResponse.json();

      if (!urlData.success) {
        return { success: false, error: urlData.error };
      }

      // Upload file
      const uploadResponse = await fetch(urlData.uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: file,
      });

      if (!uploadResponse.ok) {
        return { success: false, error: 'File upload failed' };
      }

      // Notify completion
      await fetch('/api/knowledge-base/upload', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          knowledgeBaseId: urlData.knowledgeBaseId,
          filename: file.name,
        }),
      });

      await fetchEntries();
      return { success: true };

    } catch (error) {
      return { success: false, error: 'Upload error' };
    } finally {
      setLoading(false);
    }
  }, [fetchEntries]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  return {
    entries,
    loading,
    addEntry,
    updateEntry,
    deleteEntry,
    uploadFile,
    fetchEntries,
  };
};
