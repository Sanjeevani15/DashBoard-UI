import classNames from 'classnames';
import {CollapsIcon,HomeIcon,ArticleIcon,UsersIcon,VideosIcon, LogoutIcon} from './icons';
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState} from 'react'

const menuItems = [
    { id: 1, label: "Dashboard", icon: HomeIcon, link: "/" },
    { id: 2, label: "Calendar", icon: ArticleIcon, link: "/calendar" },
    { id: 3, label: "Team Chat", icon: UsersIcon, link: "/teamchat" },
    { id: 4, label: "Statistics", icon: VideosIcon, link: "/statistics" },
  ];


const Sidebar = () => {
   
    const [toggleCollapse,setToggleCollapse]=useState(false);
    const[isCollapsible,setIsCollapsible]=useState(false);

   
    const router = useRouter();

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );


    const wrapperClasses=classNames('h-screen pl-4 pt-8 pb-4 bg-white flex justify-between flex-col',
    {
        ['w-80']:!toggleCollapse,
        ['w-20']:toggleCollapse
    });

    const collapseIconClasses = classNames(
        "p-4 pr-8 rounded absolute right-0",
        {
          "rotate-180": toggleCollapse,
        }
      );

    const navItemClasses=(menu)=>{
        return classNames(
            "flex items-center cursor-pointer hover:bg-slate-300 rounded w-full overflow-hidden whitespace-nowrap",
            {
              ["bg-indigo-50 text-red-500 text-lg font-semibold"]:activeMenu.id === menu.id,
            }
          );
        };



    const onMouseOver=()=>{
        setIsCollapsible(!isCollapsible);
    };


    const handleSidebarToggle=()=>{
        setToggleCollapse(!toggleCollapse);
    };

  return (
    <div className={wrapperClasses} 
        onMouseEnter={onMouseOver} 
        onMouseLeave={onMouseOver} 
       
        style={{transition:"width 300ms cubic-bezeir(0.2,0,0,1) 0s"}}
        >

        {/* first div is for logio and the second div is for logout option */}
        <div className='flex flex-col'>
            <div className="flex items-center justify-between relative">


                <div className='flex items-center pl-1 gap-4'>
                   
                    <span className={classNames('flex mt-2 text-2xl font-large text-text tracking-wide font-semibold',{hidden:toggleCollapse,})}>
                        <p>Tas</p><p className='text-red-400'>KiE</p>
                    </span>
                </div>  

            
            {isCollapsible && (<button className={collapseIconClasses} onClick={handleSidebarToggle}>
                <CollapsIcon/>
            </button>)}
        </div>  

            <div className='flex flex-col items-start mt-24'>
                    {menuItems.map(({icon:Icon, ...menu})=>{
                         const classes = navItemClasses(menu);
                            return(
                                <div key={menu.id} className={classes}>
                                    <Link href={menu.link}>
                                    <a className="flex py-4 px-3 items-center w-full h-full">
                                        <div style={{ width: "2.5rem" }}>
                                            <Icon/>
                                         </div>
                                         {!toggleCollapse && (
                                            <span
                                                className={classNames(
                                                "text-md font-medium text-text-light"
                                                )}
                                            >
                                                {menu.label}
                                            </span>
                                            )}
                                    </a>
                                    </Link>
                                    
                                </div>
                            )
                    })}
            </div>

      </div>

      <div className={`${navItemClasses({})} px-3 py-4`}>
          <div style={{width:"2.5rem"}}>
              <LogoutIcon/>   
              {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}  
          </div>

      </div>
    </div>
  )
}

export default Sidebar;
