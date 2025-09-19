"use client";

import React, { useState } from "react";
import { Plus, Upload, Trash2, Edit, FileText, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useKnowledgeBase } from "@/hooks/use-knowledge-base";
import { useDialog } from "@/hooks/use-dialog";
import { useForm } from "@/hooks/use-form";

interface KnowledgeBaseEntry {
  id: string;
  title?: string;
  rawText?: string;
  filename?: string;
  stage: 'raw' | 'processed' | 'vector';
  createdAt: string;
  size?: number;
}

const KnowledgeBaseManager = () => {
  const { entries, loading, addEntry, updateEntry, deleteEntry, uploadFile } = useKnowledgeBase();
  const addDialog = useDialog();
  const editDialog = useDialog();
  const entryForm = useForm({ title: "", text: "" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editingEntry, setEditingEntry] = useState<KnowledgeBaseEntry | null>(null);

  // Handle add text entry
  const handleAddText = async () => {
    if (!entryForm.values.text.trim()) return;

    const result = await addEntry(entryForm.values.text, entryForm.values.title);

    if (result.success) {
      entryForm.reset();
      addDialog.close();
    } else {
      alert("Failed to add entry: " + result.error);
    }
  };

  // Handle update entry
  const handleUpdate = async () => {
    if (!editingEntry || !entryForm.values.text.trim()) return;

    const result = await updateEntry(editingEntry.id, entryForm.values.text, entryForm.values.title);

    if (result.success) {
      setEditingEntry(null);
      entryForm.reset();
      editDialog.close();
    } else {
      alert("Failed to update entry: " + result.error);
    }
  };

  // Handle delete entry
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this knowledge base entry?")) {
      return;
    }

    const result = await deleteEntry(id);

    if (!result.success) {
      alert("Failed to delete entry: " + result.error);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const result = await uploadFile(selectedFile);

    if (result.success) {
      setSelectedFile(null);
      addDialog.close();
    } else {
      alert("Failed to upload file: " + result.error);
    }
  };

  // Open edit dialog
  const openEditDialog = (entry: KnowledgeBaseEntry) => {
    setEditingEntry(entry);
    entryForm.updateValues({
      title: entry.title || "",
      text: entry.rawText || "",
    });
    editDialog.open();
  };

  // Get stage badge color
  const getStageBadgeColor = (stage: string) => {
    switch (stage) {
      case 'raw':
        return 'bg-yellow-100 text-yellow-800';
      case 'processed':
        return 'bg-blue-100 text-blue-800';
      case 'vector':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Knowledge Base</h1>
          <p className="text-gray-600 mt-2">
            Manage your Sensay replica's knowledge base entries
          </p>
        </div>

        <Dialog open={addDialog.isOpen} onOpenChange={addDialog.setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Knowledge
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Knowledge Base Entry</DialogTitle>
              <DialogDescription>
                Add text content or upload a file to train your replica
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Title (optional)</label>
                <Input
                  value={entryForm.values.title}
                  onChange={entryForm.handleChange('title')}
                  placeholder="Enter a title for this knowledge..."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Text Content</label>
                <Textarea
                  value={entryForm.values.text}
                  onChange={entryForm.handleChange('text')}
                  placeholder="Enter the knowledge content here..."
                  rows={8}
                />
              </div>

              <div className="text-center text-gray-500">OR</div>

              <div>
                <label className="text-sm font-medium">Upload File</label>
                <Input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  accept=".txt,.pdf,.doc,.docx,.md"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supports files up to 50MB (.txt, .pdf, .doc, .docx, .md)
                </p>
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    addDialog.close();
                    entryForm.reset();
                    setSelectedFile(null);
                  }}
                >
                  Cancel
                </Button>

                {selectedFile ? (
                  <Button onClick={handleFileUpload} disabled={loading}>
                    {loading ? (
                      <>
                        <Upload className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddText}
                    disabled={!entryForm.values.text.trim() || loading}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Add Text
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading && entries.length === 0 ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading knowledge base entries...</p>
        </div>
      ) : entries.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No knowledge base entries yet
            </h3>
            <p className="text-gray-600 mb-4">
              Start by adding some content to train your Sensay replica
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {entries.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      {entry.title || entry.filename || "Untitled Entry"}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Created: {new Date(entry.createdAt).toLocaleDateString()}
                      {entry.size && ` • Size: ${(entry.size / 1024).toFixed(1)}KB`}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStageBadgeColor(entry.stage)}>
                      {entry.stage}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditDialog(entry)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {entry.rawText && (
                <CardContent>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {entry.rawText}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={editDialog.isOpen} onOpenChange={editDialog.setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Knowledge Base Entry</DialogTitle>
            <DialogDescription>
              Update the content of this knowledge base entry
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title (optional)</label>
              <Input
                value={entryForm.values.title}
                onChange={entryForm.handleChange('title')}
                placeholder="Enter a title for this knowledge..."
              />
            </div>

            <div>
              <label className="text-sm font-medium">Text Content</label>
              <Textarea
                value={entryForm.values.text}
                onChange={entryForm.handleChange('text')}
                placeholder="Enter the knowledge content here..."
                rows={8}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => {
                  editDialog.close();
                  setEditingEntry(null);
                  entryForm.reset();
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>

              <Button
                onClick={handleUpdate}
                disabled={!entryForm.values.text.trim() || loading}
              >
                <Save className="w-4 h-4 mr-2" />
                Update Entry
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KnowledgeBaseManager;
