import { NextRequest, NextResponse } from 'next/server';

const SENSAY_BASE_URL = 'https://api.sensay.io';
const ORGANIZATION_SECRET = process.env.SENSAY_ORGANIZATION_SECRET!;
const API_VERSION = '2025-03-25';
const REPLICA_ID = process.env.SENSAY_REPLICA_ID!;

// Create a new knowledge base entry
export async function POST(request: NextRequest) {
  try {
    const { rawText, title } = await request.json();

    if (!rawText) {
      return NextResponse.json(
        { error: 'Raw text content is required' },
        { status: 400 }
      );
    }

    // Step 1: Create empty knowledge base entry
    const createResponse = await fetch(
      `${SENSAY_BASE_URL}/v1/replicas/${REPLICA_ID}/training`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-ORGANIZATION-SECRET': ORGANIZATION_SECRET,
          'X-API-Version': API_VERSION,
          'Accept': 'application/json',
        },
        body: JSON.stringify({}),
      }
    );

    if (!createResponse.ok) {
      const errorText = await createResponse.text();
      console.error('Failed to create knowledge base entry:', errorText);
      return NextResponse.json(
        { error: 'Failed to create knowledge base entry' },
        { status: createResponse.status }
      );
    }

    const createData = await createResponse.json();
    const knowledgeBaseId = createData.knowledgeBaseID || createData.id;

    if (!knowledgeBaseId) {
      return NextResponse.json(
        { error: 'No knowledge base ID returned from creation' },
        { status: 500 }
      );
    }

    // Step 2: Add content to the knowledge base entry
    const contentPayload: any = { rawText };
    if (title) {
      contentPayload.title = title;
    }

    const updateResponse = await fetch(
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

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      console.error('Failed to update knowledge base entry:', errorText);
      return NextResponse.json(
        { error: 'Failed to add content to knowledge base' },
        { status: updateResponse.status }
      );
    }

    const updateData = await updateResponse.json();

    return NextResponse.json({
      success: true,
      knowledgeBaseId,
      data: updateData,
      message: 'Knowledge base entry created and content added successfully',
    });

  } catch (error) {
    console.error('Knowledge base creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Get all knowledge base entries
export async function GET() {
  try {
    const response = await fetch(
      `${SENSAY_BASE_URL}/v1/replicas/${REPLICA_ID}/training`,
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
      console.error('Failed to fetch knowledge base entries:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch knowledge base entries' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      entries: data,
    });

  } catch (error) {
    console.error('Knowledge base fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
