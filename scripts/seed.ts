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
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.challenges);
        await db.delete(schema.units);
        await db.delete(schema.lessons);

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

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the Basics of Spanish",
                order: 1
            }
        ]);

        await db.insert(schema.lessons).values([
            {
               id: 1,
               unitId: 1,
               order: 1,
               title: "Nouns" 
            },
            {
               id: 2,
               unitId: 1,
               order: 2,
               title: "Verbs" 
            },

        ])

        await db.insert(schema.challenges).values([
            
        ])

        console.log("Seeding Finished Successfully...")
    } catch (error) {
        console.error('Error seeding database:', error);
        throw new Error('Database seeding failed');
    }
};

main();

