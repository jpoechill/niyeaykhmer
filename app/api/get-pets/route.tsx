import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET() {
    noStore();

    const pets = await sql`SELECT * FROM Pets;`;
    console.log(pets)
    return NextResponse.json({ pets }, { status: 200 });
}