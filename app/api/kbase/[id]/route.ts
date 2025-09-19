import { NextRequest, NextResponse } from 'next/server';

const SENSAY_BASE_URL = 'https://api.sensay.io';
const ORGANIZATION_SECRET = process.env.SENSAY_ORGANIZATION_SECRET!;
const API_VERSION = '2025-03-25';
const REPLICA_ID = process.env.SENSAY_REPLICA_ID!;

// Get specific knowledge base entry
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const knowledgeBaseId = params.id;

    const response = await fetch(
      `${SENSAY_BASE_URL}/v1/replicas/${REPLICA_ID}/training/${knowledgeBaseId}`,
      {
        method: 'GET',
        headers: {
          'X-ORGANIZATION-SECRET': ORGANIZATION_SECRET,
          'X-API-Version': API_VERSION,
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch knowledge base entry:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch knowledge base entry' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      entry: data,
    });

  } catch (error) {
    console.error('Knowledge base fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Update knowledge base entry
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const knowledgeBaseId = params.id;
    const { rawText, title } = await request.json();

    if (!rawText) {
      return NextResponse.json(
        { error: 'Raw text content is required' },
        { status: 400 }
      );
    }

    const contentPayload: any = { rawText };
    if (title) {
      contentPayload.title = title;
    }

    const response = await fetch(
      `${SENSAY_BASE_URL}/v1/replicas/${REPLICA_ID}/training/${knowledgeBaseId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-ORGANIZATION-SECRET': ORGANIZATION_SECRET,
          'X-API-Version': API_VERSION,
          'Accept': 'application/json',
        },
        body: JSON.stringify(contentPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to update knowledge base entry:', errorText);
      return NextResponse.json(
        { error: 'Failed to update knowledge base entry' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data,
      message: 'Knowledge base entry updated successfully',
    });

  } catch (error) {
    console.error('Knowledge base update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Delete knowledge base entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const knowledgeBaseId = params.id;

    const response = await fetch(
      `${SENSAY_BASE_URL}/v1/replicas/${REPLICA_ID}/training/${knowledgeBaseId}`,
      {
        method: 'DELETE',
        headers: {
          'X-ORGANIZATION-SECRET': ORGANIZATION_SECRET,
          'X-API-Version': API_VERSION,
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to delete knowledge base entry:', errorText);
      return NextResponse.json(
        { error: 'Failed to delete knowledge base entry' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Knowledge base entry deleted successfully',
    });

  } catch (error) {
    console.error('Knowledge base delete error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
