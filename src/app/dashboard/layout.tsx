import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* lift side */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex justify-center items-center md:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" height={32} width={32} />
          <span className="hidden md:block">School Menu</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA] xl:w-[86%]  p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
