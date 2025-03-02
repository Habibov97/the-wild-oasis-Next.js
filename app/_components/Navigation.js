import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {

  const session =  await auth();

  return (
    <nav className="z-10 text-lg  md:text-xl">
      <ul className="flex flex-col md:flex-row gap-3 md:gap-16 justify-end items-end md:items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
         { session?.user?.image ? ( <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <img className="h-8 rounded-full" src={session.user.image} alt={session.user.name} referrerPolicy="no-referrer"/>
            <span>{session.user.name}</span>
          </Link>) 
          : (
            <Link
             href="/account"
             className="hover:text-accent-400 transition-colors"
            >
             Guest
            </Link>
          )
          }
        </li>
      </ul>
    </nav>
  );
}
