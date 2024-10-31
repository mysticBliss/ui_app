import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function GET() {
  try {
    const places = await prisma.place.findMany({
      include: {
        seasons: true,
        landmarks: true,
        activities: true,
      },
    });
    return NextResponse.json(places);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch places' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const place = await prisma.place.create({
      data: {
        ...data,
        seasons: {
          create: data.seasons,
        },
        landmarks: {
          create: data.landmarks,
        },
        activities: {
          create: data.activities,
        },
      },
    });
    return NextResponse.json(place);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create place' }, { status: 500 });
  }
}