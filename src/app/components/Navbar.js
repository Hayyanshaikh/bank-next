import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/images/brands/logo.svg';

const Navbar = () => {
	return (
		<header className="fixed top-[50px] w-full">
			<div className="container">
				<div className="py-[20px] px-[34px] rounded-full border border-light-background bg-lighter-background flex items-center gap-3">
					<div className="flex-1">
						<Link href="/" className="logo h-auto w-[155.83px] flex">
							<Image
					      src={Logo}
					      alt="Picture of the author"
					      className="object-contain h-full w-full"
					    />
						</Link>
					</div>
					<div className="flex-1">
						<nav>
							<ul className="flex items-center justify-center gap-[5px]">
							  <li>
							    <Link href="/" className="text-white py-[12px] transition px-[24px] rounded-full bg-light-background">Home</Link>
							  </li>
							  <li>
							    <Link href="/careers" className="text-white py-[12px] transition px-[24px] rounded-full hover:bg-light-background">Careers</Link>
							  </li>
							  <li>
							    <Link href="/about" className="text-white py-[12px] transition px-[24px] rounded-full hover:bg-light-background">About</Link>
							  </li>
							  <li>
							    <Link href="/security" className="text-white py-[12px] transition px-[24px] rounded-full hover:bg-light-background">Security</Link>
							  </li>
							</ul>
						</nav>
					</div>
					<div className="flex-1 flex justify-end">
						<ul className="flex items-center justify-center gap-[5px]">
						  <li>
						    <Link href="/" className="text-white py-[12px] px-[24px] rounded-full transition hover:bg-primary hover:text-background">Sign Up</Link>
						  </li>
						  <li>
						    <Link href="/careers" className="text-background py-[12px] px-[24px] rounded-full bg-primary">Login</Link>
						  </li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar;