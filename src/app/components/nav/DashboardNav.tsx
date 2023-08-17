import React from "react";
import AppTitle from "../ui/AppTitle";

interface PropsType {
	isSideBarOpen: boolean;
	openSideBarHandler: () => void;
	closeSideBarHandler: () => void;
}

const DashboardNav: React.FC<PropsType> = ({
	isSideBarOpen,
	openSideBarHandler,
	closeSideBarHandler,
}) => {
	return (
		<nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
			<div className='px-3 py-3 lg:px-5 lg:pl-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-start'>
						{!isSideBarOpen && (
							<button
								data-drawer-target='logo-sidebar'
								data-drawer-toggle='logo-sidebar'
								aria-controls='logo-sidebar'
								type='button'
								className='inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border border-gray-200 bg-gray-200'
								onClick={openSideBarHandler}
							>
								<span className='sr-only'>Open sidebar</span>
								<svg
									className='w-4 h-4  p-0'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										clipRule='evenodd'
										fillRule='evenodd'
										d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
									></path>
								</svg>
							</button>
						)}
						{isSideBarOpen && (
							<button
								data-drawer-target='logo-sidebar'
								data-drawer-toggle='logo-sidebar'
								aria-controls='logo-sidebar'
								type='button'
								className='inline-flex items-center p-1  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border border-gray-200 bg-gray-200 text-xs'
								onClick={closeSideBarHandler}
							>
								<span className='sr-only'>Close sidebar</span>

								<svg
									className='w-4 h-4 text-red-500 '
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 14 14'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='1.5'
										d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
									/>
								</svg>
							</button>
						)}
						{/* <a
							href='https://flowbite.com'
							className='flex ml-2 md:mr-24'
						>
							<img
								src='https://flowbite.com/docs/images/logo.svg'
								className='h-8 mr-3'
								alt='FlowBite Logo'
							/>
							<AppTitle />
						</a> */}
						<AppTitle />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default DashboardNav;
