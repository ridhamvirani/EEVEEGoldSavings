"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_reset } from '../../redux/auth/authSlice';
import { Routes } from "../../utils/routes";

const Index = () => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.login);
    const signupState = useSelector((state) => state.signup);

    console.log("jkjkjk===", loginState.data, signupState.data);
    const [toggle, setToggle] = useState(false);
    const [isNavbarBg, setIsNavbarBg] = useState(false);
    const [routePath, setRoutePath] = useState("/");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenSideNavbar = () => setToggle(true);
    const handleCloseSideNavbar = () => setToggle(false);

    console.log('data', loginState.data)

    const handleDropdownClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Cookies.remove("authToken");
        handleDropdownClose();
        dispatch(login_reset())
        router.push("/login");
    };

    const navbarVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setIsNavbarBg(true);
        } else {
            setIsNavbarBg(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", navbarVisible);
    }

    useEffect(() => {
        console.log("Current path:", pathname);
        setRoutePath(pathname);
    }, [pathname]);

    return (
        <nav
            className={`${toggle
                ? "bg-[--shadow-color] lg:bg-[--white]"
                : isNavbarBg
                    ? "bg-[--black]  border-b border-b-gray-700 "
                    : "bg-[--black]  "
                } overflow-x-hidden w-[100%] fixed top-0 left-0 z-50 `}
        >
            {/* Web Navbar */}
            <div className="w-[90%] mx-auto ">
                <div className="flex justify-between items-center py-4">
                    <Link href="/"
                        className={`font-medium text-xl md:text-3xl text-[--primary]
                            `}
                    >
                        EEVEE
                    </Link>

                    <div className="navMenuItems hidden md:flex items-center md:space-x-5">
                        {Routes.map((route, index) => (
                            <li
                                key={index}
                                className={`relative list-none tracking-wide hover:text-[--secondary] transition-all ease-in-out duration-500 p-1  ${routePath === route.path &&
                                    "!text-[--secondary]"
                                    }`}
                                onClick={() => setRoutePath(route.path)}
                            >
                                <Link href={route.path} key={index}>
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                        <button className="bg-[--secondary]  px-6 py-2 text-bold rounded-full text-white tracking-wide  hover:scale-110 transition ease-in-out delay-150 duration-300" onClick={() => {
                            if (Object.keys(loginState.data).length > 0) {
                                handleLogout();
                            } else {
                                router.push('/login');
                            }
                        }}>{Object.keys(loginState.data).length > 0 ? 'Logout' : 'Login'}</button>
                    </div>
                    <div className="block md:hidden cursor-pointer">
                        <MenuIcon
                            fontSize="medium"
                            className={`
                            "text-[--white] hover:text-[--secondary] transition-all ease-in-out duration-500"
                                `}
                            onClick={handleOpenSideNavbar}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}

            <div
                className={`${toggle && "bg-[--black] lg:hidden fixed w-[100%] !h-[100vh]"
                    }`}
            >
                <div
                    className={`fixed top-0 left-0 w-[320px] !h-[100vh] bg-[--black] ition-all ease-in-out duration-500 ${toggle ? "translate-x-0" : "translate-x-[-100%]"
                        }`}
                >
                    <div className="flex justify-between items-center p-4">
                        <h1
                            className={`font-medium text-xl md:text-3xl  ${isNavbarBg
                                ? "text-[--white]"
                                : "text-[--primary]"
                                }`}
                        >
                            EEVEE
                        </h1>
                        {/* <Image src="/images/logo.png" alt='logo' width={1000} height={1000} className=' h-full object-contain w-[90px]' /> */}
                        <CloseIcon
                            fontSize="medium"
                            className="cursor-pointer transition-all ease-in-out duration-500 text-[--white] hover:text-[--secondary]"
                            onClick={handleCloseSideNavbar}
                        />
                    </div>
                    <div className="relative w-trans[100%] flex items-start flex-col py-4 space-y-4 list-none px-4 transition-all ease-in-out duration-500">
                        {Routes.map((route, index) => (
                            <li key={index} className={`list-none hover:text-[--secondary] transition-all ease-in-out duration-500 w-[100%] border-b border-gray-500 py-[8px] text-[18px] capitalize font-medium  ${routePath === route.path ? "text-[--secondary] " : "text-[--white]"}`}
                            >
                                {console.log('routePath =======>', routePath === route.path, routePath, route.path)}
                                <Link
                                    href={route.path}
                                    key={index}
                                    className="w-[100%]"
                                    onClick={handleCloseSideNavbar}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                        <button className="py-[8px] bg-[--secondary] text-white w-full flex justify-center items-center rounded-lg transition-all ease-in-out duration-500 text-[18px] capitalize font-medium ml-1" onClick={() => {
                            if (Object.keys(loginState.data).length > 0) {
                                handleLogout();
                            } else {
                                router.push('/login');
                            }
                        }}>{Object.keys(loginState.data).length > 0 ? 'Logout' : 'Login'}</button>
                    </div>
                </div>
            </div>

            {/* <div className=" cursor-pointer lg:hidden flex items-center gap-2">
                        {loginState?.data ? (
                            <>
                                <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleDropdownClick}>OP</Avatar>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleDropdownClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "var(--white)",
                                            color: "var(--black)",
                                        },
                                    }}
                                >
                                    <MenuItem disabled>
                                        <p className="text-sm font-medium">
                                            {loginState?.data?.user?.fullName}
                                        </p>
                                    </MenuItem>
                                    <MenuItem disabled>
                                        <p className="text-sm">
                                            {loginState?.data?.user?.email}
                                        </p>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <p className="text-sm font-medium">Logout</p>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Link href="/login" className="text-[--white] hover:text-[--secondary] font-medium">
                                Login
                            </Link>
                        )}
                        
                    </div>
                    
                    <div className="relative navMenuItems hidden lg:flex items-center lg:space-x-7">
                        {loginState?.data ? (
                            <>
                                <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleDropdownClick}>OP</Avatar>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleDropdownClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: "var(--white)",
                                            color: "var(--black)",
                                        },
                                    }}
                                >
                                    <MenuItem disabled>
                                        <p className="text-sm font-medium">
                                            {loginState?.data?.user?.fullName}
                                        </p>
                                    </MenuItem>
                                    <MenuItem disabled>
                                        <p className="text-sm">
                                            {loginState?.data?.user?.email}
                                        </p>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <p className="text-sm font-medium">Logout</p>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Link href="/login" className="text-[--white] hover:text-[--secondary] font-medium">
                                Login
                            </Link>
                        )}
                    </div> */}
        </nav >
    );
};

export default Index;