import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log('Seeding database...');

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: 'Spanish',
                imageSrc: '/es.svg'
            },
            {
                id: 2,
                title: 'Italian',
                imageSrc: '/it.svg'
            },
            {
                id: 3,
                title: 'Croatian',
                imageSrc: '/hr.svg'
            },
            {
                id: 4,
                title: 'French',
                imageSrc: '/fr.svg'
            },

        ]);
        console.log('Deleted existing data.');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw new Error('Database seeding failed');
    }
};

main();

