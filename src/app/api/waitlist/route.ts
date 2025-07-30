import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), email, name]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
}