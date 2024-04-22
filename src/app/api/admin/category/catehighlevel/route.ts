import { getSqlClient } from '@root/src/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getSqlClient().category.findMany({
      include: {
        products: true,
      },
    });
    if (!data) {
      return NextResponse.json({ mes: 'not oke data' });
    }
    return NextResponse.json({ mes: 'oke', data });
  } catch (error) {
    return NextResponse.json({ mes: 'not oke' });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, description, slug, customFields, parentId } = data;
  try {
    if (parentId === undefined) {
      const data = await getSqlClient().category.create({
        data: {
          name,
          description,
          slug,
          customFields,
        },
      });
      return NextResponse.json({ mes: 'oke', data });
    } else {
      return await getSqlClient().$transaction(async prisma => {
        const newChildCategory = await prisma.category.create({
          data: {
            name,
            description,
            slug,
            customFields,
            parentId,
          },
        });
        return NextResponse.json({ mes: 'oke', newChildCategory });
      });
    }
  } catch (error) {
    return NextResponse.json({ mes: 'not oke' });
  }
}
