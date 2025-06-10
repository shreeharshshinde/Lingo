import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Loader } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w--[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center gap-2 p-4">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt='hero'/>
      </div>
      <div className='flex flex-col items-center gay-y-8'>
        <h1 className='text-xl lg:text-3xl font-bold text-center text-neutral-600 max-w-[480px] mb-8'>
          Learn, Practice and Master Languages with Lingo
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className='h-5 w-5 animate-spin text-muted-foreground'/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" forceRedirectUrl='/'>
                <Button size={"lg"} variant={"secondary"} className="w-full">Get Started</Button>
              </SignUpButton>
              <SignInButton mode="modal" forceRedirectUrl='/'>
                <Button size={"lg"} variant={"primaryOutline"} className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button>
                <Link href="/learn">
                  Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
      
    </div>
  );
}
