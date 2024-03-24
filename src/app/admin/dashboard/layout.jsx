"use client";
import Image from "next/image";
import { TiBell } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Sidebar = ({ children }) => {
  // federal ministry logo
  // https://www.google.com/search?sca_esv=d34a127615f5f538&sxsrf=ACQVn0_JC2Bz0jaWtmJlaocKsxRs7fDUlw:1711293074342&q=federal+ministry+of+education+pakistan&tbm=isch&source=lnms&prmd=invsbz&sa=X&ved=2ahUKEwjT1bW-l42FAxV_0QIHHYWvBqQQ0pQJegQIEBAB&biw=1600&bih=773&dpr=1#imgrc=poqvpx4S1O3C0M
  
  const [activeState,setActiveState] = useState(0)
  const [userPop, setUserPop] = useState(false)
  const [togglebanner,setToggleBanner] = useState(false)
  const [toggleside, setToggleSide] = useState(false)
  const sidebarlinks = [
    {
      imgPath:'/admin/sidebaricons/Icon_Dashboard.svg',
      title:'Dashboard',
      link:'/admin/dashboard',
      index:0
    },
    
    {
      imgPath:'/admin/sidebaricons/Icon_Services.svg',
      title:'Publications',
      link:'/admin/dashboard/publications',
      index:2
    },
    {
      imgPath:'/admin/sidebaricons/Icon_Orders.svg',
      title:'Departments',
      link:'/admin/dashboard/departments',
      index:1
    },
    
    {
      imgPath:'/admin/sidebaricons/Icon_Customers.svg',
      title:'Faculty',
      link:'/admin/dashboard/faculty',
      index:3
    },
    {
      imgPath:'/admin/sidebaricons/Icon_Reference.svg',
      title:'Admins',
      link:'/admin/dashboard/admins',
      index:4
    },
    {
      imgPath:'/admin/sidebaricons/Icon_Reports.svg',
      title:'Reports',
      link:'/admin/dashboard',
      disable:true,
      index:4
    },
    {
      imgPath:'/admin/sidebaricons/Icon_History.svg',
      title:'History',
      link:'/admin/dashboard/history',
      index:5
    },
    {
      imgPath:'/admin/sidebaricons/Icon_Settings.svg',
      title:'Settings',
      link:'/admin/dashboard/settings',
      index:6
    },
    {
      imgPath:'/admin/sidebaricons/Icon_Help.svg',
      title:'Help',
      link:'/admin/dashboard/help',
      index:7
    },
  ]
  const [nightMode, setNightMode] = useState(false);
  const path = usePathname();
  const arr = path.split("/");
  const arrlength = path.split("/").length;
  useEffect(()=>{
    const handleScroll = () => {
      // Check if user has scrolled beyond a certain threshold
      console.log(window.scrollY);
      if (window.scrollY > 25) {
        setToggleBanner((prev)=>true);
      } 
    };
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   },[])
   
 
  return (
    <>
    <div className="md:hidden sm:block block h-[100vh] bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] p-10 ">
      <div className="flex flex-col justify-between text-center h-full items-center text-3xl  text-white rounded p-5">
        <h1 className="text-3xl text-center font-bold text-white">
        Publication Managment System
        </h1>
      <Image src={'/Logo.svg'} height={120} width={120}/>
<h1 className="border-b-2 border-red-500 border-t-2">
Please Open this on Desktop or Laptop
</h1>
</div>
    </div>
    <div className={`banner ${togglebanner?'h-[0px] transition-all duration-500':'h-[180px] transition-all duration-500'} items-center overflow-hidden  justify-center w-full text-white shadow-lg hidden sm:hidden md:flex`}>     
    </div>
    <div className=" hidden sm:hidden md:flex">
      <div className={` min-h-screen fixed ${togglebanner?'top-[0px]':'top-[180px]'} left-0 bg-gradient-to-b from-[#42B2BC] to-[#1E5156] flex flex-col justify-between ${ toggleside? 'w-[73px]':'w-[200px]'} pr-5`} >
        <div className="relative">

        <div title="Toggle Sidebar" className={`absolute -right-8 -rotate-90 top-[57px] bg-white rounded-full cursor-pointer ${ !toggleside && 'rotate-90'}`} onClick={()=>setToggleSide(!toggleside)}>
          <Image
          src={'/admin/sidebaricons/sidebartoggler.svg'}
          width={30}
          height={30}
          className="border-2 border-white rounded-full animate-pulse"
          />
        </div>
          <div className="flex gap-3 mb-2 h-16 items-center">
            <Image
            width={40}
            height={40}
            src={'/Logo.svg'}
            />
            <p className="font-bold text-xl text-white">{ !toggleside && 'Publication'}</p>
          </div>
          <hr className=" mb-5 opacity-15"/>
          {
            sidebarlinks.map((ele,index)=>( 
          <Link key={index} href={ele.link}>
          <div key={index} onClick={()=>setActiveState(index)} title={ele.disable && 'Wait For Next Version'} className={`mt-3 pr-0 ${ele.disable && 'cursor-no-drop'} ${ !ele.disable && 'hover:scale-105 hover:bg-gradient-to-b from-[#42B2BC] to-[#1E5156] hover:shadow-md'} flex gap-4 group py-2 pl-3 rounded-r-full cursor-pointer items-center ${activeState == index && !ele.disable? "bg-gradient-to-b from-[#42B2BC] to-[#1E5156]":""}`}>
            
            <Image  className=" group-hover:text-[var(--primary-color)]  text-[var(--secondary-color)]" alt={index} src={ele.imgPath} height={25} width={25}/>
            
           { !toggleside &&
             <p className="group-hover:text-white text-white ">
              {ele.title}
            </p>
            }
          </div>
          </Link>
          ))
        }
         
        </div>
        <div className="mb-3">
           <Link  href={'/travelagency-rho.vercel.app'} target="_blank">
          <div  className={`mt-3 px-5 flex gap-4 hover:scale-105 border-[#1E5156]  hover:bg-gradient-to-b from-[#42B2BC] to-[#1E5156]  group py-2 rounded-r-full cursor-pointer items-center`}>
            <Image className=" group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]" src={'/admin/sidebaricons/Icon_Website.svg'} alt="HELLO" height={25} width={25}/>
           { !toggleside &&
             <p className="group-hover:text-white text-white ">
              Logout
            </p>
            }
          </div>
          </Link>
        </div>
      </div>
      <div className={`grow  relative ${ toggleside? 'ml-[73px]':'ml-[200px]'}`}>
      <div onClick={()=>setToggleBanner(!togglebanner)} className="cursor-pointer left-1/2 top-1 absolute ">
    {/* <IoIosArrowDroprightCircle title="Banner" className={`text-3xl z-10 ${togglebanner?'top-0 transition-all duration-500':'-top-3 transition-all duration-500'} -right-8 ${ togglebanner?'rotate-90 transition-all duration-500':'-rotate-90 transition-all duration-500'} bg-white rounded-full text-[var(--primary-color)] absolute`}/> */}
    { !togglebanner? <Image
    src={'/admin/sidebaricons/close.svg'}
    width={100}
    height={100}
    className="   "
    />:
    <Image
    src={'/admin/sidebaricons/open.svg'}
    width={100}
    height={100}
    className=" animate-bounce"
    />}
      </div>
        {/* #424242 */}
        <nav
          className={`p-6 ${
            nightMode && "bg-[#2C2C2C] text-white"
          } items-center flex justify-between`}
        >
          <p className="text-2xl font-bold">
            {arr[arrlength - 1].toUpperCase()}
            
          </p>
          <div className="flex relative items-center gap-2">
            <div className="flex items-center mr-5 gap-2">
              <div
                onClick={() => setNightMode(!nightMode)}
                className="cursor-pointer animate-pulse"
              >
                {nightMode ? (
                  <svg
                  
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
                      fill="white"
                    />
                    <path
                      d="M9 1C9 0.447715 9.44772 0 10 0C10.5523 0 11 0.447715 11 1V2C11 2.55228 10.5523 3 10 3C9.44772 3 9 2.55228 9 2V1Z"
                      fill="white"
                    />
                    <path
                      d="M3.636 5.05086C4.02653 5.44138 4.65969 5.44138 5.05022 5.05086C5.44074 4.66033 5.44074 4.02717 5.05022 3.63664L4.34311 2.92954C3.95259 2.53901 3.31942 2.53901 2.9289 2.92954C2.53837 3.32006 2.53837 3.95323 2.9289 4.34375L3.636 5.05086Z"
                      fill="white"
                    />
                    <path
                      d="M17.0711 2.92976C16.6806 2.53924 16.0474 2.53924 15.6569 2.92976L14.9498 3.63687C14.5593 4.02739 14.5593 4.66056 14.9498 5.05108C15.3403 5.44161 15.9735 5.44161 16.364 5.05108L17.0711 4.34398C17.4616 3.95345 17.4616 3.32029 17.0711 2.92976Z"
                      fill="white"
                    />
                    <path
                      d="M5.05037 14.9493C4.65984 14.5588 4.02668 14.5588 3.63615 14.9493L2.92905 15.6564C2.53852 16.0469 2.53852 16.6801 2.92905 17.0706C3.31957 17.4611 3.95274 17.4611 4.34326 17.0706L5.05037 16.3635C5.44089 15.973 5.44089 15.3398 5.05037 14.9493Z"
                      fill="white"
                    />
                    <path
                      d="M17.071 17.0704C16.6804 17.4609 16.0473 17.4609 15.6568 17.0704L14.9496 16.3633C14.5591 15.9728 14.5591 15.3396 14.9496 14.9491C15.3402 14.5585 15.9733 14.5585 16.3639 14.9491L17.071 15.6562C17.4615 16.0467 17.4615 16.6799 17.071 17.0704Z"
                      fill="white"
                    />
                    <path
                      d="M10 17C9.44772 17 9 17.4477 9 18V19C9 19.5523 9.44772 20 10 20C10.5523 20 11 19.5523 11 19V18C11 17.4477 10.5523 17 10 17Z"
                      fill="white"
                    />
                    <path
                      d="M19 9C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H18C17.4477 11 17 10.5523 17 10C17 9.44771 17.4477 9 18 9H19Z"
                      fill="white"
                    />
                    <path
                      d="M3 10C3 9.44772 2.55228 9 2 9H1C0.447715 9 0 9.44771 0 10C0 10.5523 0.447715 11 1 11H2C2.55228 11 3 10.5523 3 10Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                 >
<path d="M10.1023 0C4.52294 0 0 4.47715 0 10C0 15.5228 4.52294 20 10.1023 20C13.2748 20 16.1062 18.5512 17.9566 16.2895C18.2017 15.9899 18.251 15.5776 18.0835 15.2297C17.9159 14.8818 17.5612 14.6602 17.1718 14.6601C12.7093 14.659 9.09204 11.0777 9.09204 6.66011C9.09204 4.75287 9.76501 3.00394 10.8896 1.62935C11.1347 1.32982 11.184 0.917535 11.0164 0.569618C10.8488 0.221702 10.4942 9.4533e-05 10.1048 0H10.1023Z" fill="#090F15"/>
<path d="M12.841 4.74676C13.4058 4.74676 13.8637 4.29453 13.8637 3.73666C13.8637 3.1788 13.4058 2.72656 12.841 2.72656C12.2761 2.72656 11.8182 3.1788 11.8182 3.73666C11.8182 4.29453 12.2761 4.74676 12.841 4.74676Z" fill="#090F15"/>
<path d="M17.9546 10.8074C17.9546 11.3652 17.4967 11.8175 16.9319 11.8175C16.367 11.8175 15.9091 11.3652 15.9091 10.8074V9.79727H14.8864C14.3216 9.79727 13.8637 9.34503 13.8637 8.78717C13.8637 8.2293 14.3216 7.77707 14.8864 7.77707H15.9091V6.76697C15.9091 6.2091 16.367 5.75687 16.9319 5.75687C17.4967 5.75687 17.9546 6.2091 17.9546 6.76697V7.77707H18.9773C19.5422 7.77707 20.0001 8.2293 20.0001 8.78717C20.0001 9.34503 19.5422 9.79727 18.9773 9.79727H17.9546V10.8074Z" fill="#090F15"/>
</svg>

                )}
              </div>
              <div className="relative">
                <p className="absolute animate-bounce top-1 left-5 bg-[var(--secondary-color)] rounded-full text-xs text-white grid place-items-center w-4 h-4">
                  1
                </p>
                <TiBell
                  className={`text-3xl ${
                    nightMode ? "text-white" : "text-[#D0D0D0]"
                  }`}
                />
              </div>
            </div>
            <div className="h-10 cursor-pointer w-10 grid relative place-items-center bg-[#D0D0D0] rounded-full">
              <Image
              onClick={()=>setUserPop(!userPop)}
                src={"/user.svg"}
                height={35}
                width={35}
                alt="Alternate Image"
                className=" border-white rounded-full border-2"
                />
                <div className={`${ userPop?"flex":'hidden'} userpopanimate absolute left-[-150px] top-11 p-2 rounded-2xl flex-col justify-evenly w-[200px] h-[200px] bg-[var(--primary-color)] text-white border`}>
                  <div className="flex items-center gap-2 ">
                     <div>
                     </div>
                     <div className=" ">Profile</div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <div>
                     </div>
                     <div>System Info</div>
                  </div>
                  <Link href={'/admin/dashboard/help'}>
                  <div className="flex items-center  gap-2 ">
                     <div>
                     </div>
                     <div>Help</div>
                  </div>
                  </Link>
                  <div className="flex justify-center items-center w-[100%]">
                    <Link className="py-1 bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-color)] font-semibold  duration-200 text-center rounded-lg px-2 w-full" href={'/admin/auth/login'}>Logout</Link>
                  </div>
                </div>
            </div>
          </div>
        </nav>
        <div className={`ml-5`}>{children}</div>
      </div>
      
    </div>
    </>
  );
};

export default Sidebar;
