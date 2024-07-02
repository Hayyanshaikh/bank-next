'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import Logo from '../../assets/images/brands/logo.svg';
import MenuIcon from '../../assets/images/icons/menu-icon.svg';
import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'

const Navbar = () => {
	const pathname = usePathname();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/careers', label: 'Careers' },
		{ href: '/about', label: 'About' },
		{ href: '/security', label: 'Security' }
	];

	return (
		<header className="py-[30px] relative z-10">
			<div className="container">
				<div className="py-[14px] px-[24px] pr-[14px] lg:pr-[24px] rounded-full border border-light-background bg-lighter-background flex items-center gap-3">
					<div className="flex-1">
						<Link href="/" className="logo h-auto w-[140px] flex">
							<Image
					      src={Logo}
					      alt="Picture of the author"
					      className="object-contain h-full w-full"
					    />
						</Link>
					</div>
					<div className="flex-1 hidden lg:flex">
						<nav>
							<ul className="flex items-center justify-center gap-[5px]">
								{navLinks.map(link => (
									<li key={link.href}>
										<Link href={link.href} className={`text-white py-[10px] text-[14px] transition px-[18px] rounded-full ${pathname === link.href ? 'bg-light-background' : ''}`}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className="flex-1 flex justify-end">
						<ul className="flex items-center justify-center gap-[5px]">
						  <li className="hidden lg:flex">
						    <Link href="signup" className={`py-[10px] px-[18px] text-[14px] rounded-full transition ${pathname === '/signup' ? 'bg-primary text-background' : 'text-white hover:bg-primary hover:text-background'}`}>Sign Up</Link>
						  </li>
						  <li className="hidden lg:flex">
						    <Link href="login" className={`py-[10px] px-[18px] text-[14px] rounded-full transition ${pathname === '/login' || pathname !== '/signup' ? 'bg-primary text-background text-background ' : 'text-white hover:bg-primary hover:text-background'}`}>Login</Link>
						  </li>
						  <li className="lg:hidden">
							  <Menu>
							  	<MenuButton className="py-[6px] px-[14px] text-[14px] rounded-full transition bg-primary text-background text-background">
							    	<Image
							    		src={MenuIcon}
							    		alt="Menu Icon"
							    	/>
								  </MenuButton>
								  <MenuItems transition anchor="bottom end" className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 bg-lighter-background p-2 rounded-xl border border-light-background mt-[18px] w-[200px]">
						        	{navLinks.map(link => (
								        <MenuItem key={link.href}>
													<Link href={link.href} className={`py-[10px] text-[14px] transition px-[18px] rounded-lg ${pathname === link.href ? 'bg-primary text-background' : 'text-white'}`}>
														{link.label}
													</Link>
								        </MenuItem>
											))}
						        <MenuSeparator className="my-1 h-px bg-light-background" />
								  	<div className="flex pt-2">
								  		<MenuItem className="flex-1 text-center">
							          <Link href="signup" className={`py-[10px] px-[18px] text-[14px] rounded-lg transition ${pathname === '/signup' ? 'bg-light-background text-white' : ''}`}>Sign Up</Link>
							        </MenuItem>
							        <MenuItem className="flex-1 text-center">
							          <Link href="login" className={`py-[10px] px-[18px] text-[14px] rounded-lg transition ${pathname === '/login' || pathname !== '/signup' ? 'bg-light-background text-white ' : ''}`}>Login</Link>
							        </MenuItem>
								  	</div>
								  </MenuItems>
							  </Menu>
						  </li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar;