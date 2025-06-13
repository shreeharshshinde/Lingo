"use server";

import db from "@/db/drizzle";
import { getCourseId, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
    const {userId} = await auth();
    const user = await currentUser();

    if( !userId || !user) {
        throw new Error("User not authenticated");
    }

    const course = await getCourseId(courseId);
    if (!course) {
        throw new Error("Course not found");
    }

    // if(!course.units.length || !course.units[0].lessons.length) {
    //     throw new Error("Course has Empty");
    // }

    const existingUserProgress = await getUserProgress();
    if (existingUserProgress) {
        await db.update(userProgress)
            .set({
                activeCourseId: courseId,
                username: user.firstName || "User",
                userImageSrc: user.imageUrl || "/mascot.svg",
                hearts: 5,
                points: 0,
            });

            revalidatePath("/courses");
            revalidatePath("/learn");
            redirect("/learn");
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        username: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
        hearts: 5,
        points: 0,
    })

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
}