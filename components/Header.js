import Image from "next/image";
import Link from "next/link";

const Header = () => {
   return (
      <header className="">
         <div className="container mx-auto flex flex-col mb-6 md:mb-0 md:flex-row justify-between items-center">
            <Link href="/">
               <a>
                  <Image src="/EPE-2-2.png" width="227" height="149" alt="EPE Logo" />
               </a>
            </Link>
            <nav className="flex-1 uppercase font-light tracking-[.25rem]">
               <ul className="flex justify-end gap-4 md:gap-6 lg:gap-14">
                  <Link href="/"><a>Home</a></Link>
                  <Link href="/asset-categories"><a>Assets</a></Link>
                  {/* <Link href="/blog"><a>Blog</a></Link> */}
                  {/* <Link href="/research"><a>Research</a></Link> */}
                  <Link href="/links"><a>Links</a></Link>
               </ul>
            </nav>
         </div>
      </header>
   );
}

export default Header;