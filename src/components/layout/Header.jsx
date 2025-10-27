
import {Menu, Search, Filter, Plus, Sun, Bell, Settings, ChevronDown} from "lucide-react";
import React from 'react'

function Header({sidebarCollapsed, onToggleSidebar}) {
  return (
    <div className='bg-white/-80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>
        
        {/*Section de Gauche*/}
        <div className='flex items-center space-x-4'>
          <button 
            className='p-2 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            onClick={onToggleSidebar}
          >
            <Menu className="w-5 h-5"/>
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">Dashboard</h1>
            <p>Welcom back, Ange! Quoi de neuf aujourd'hui</p>
          </div>
        </div>

        {/*Section du Centre*/}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Rechercher" className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border dark:bg-slate-800 
            border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
             text-color-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ">
              <Filter />
            </button>
          </div>
        </div>

        {/*Section du Droite*/}
        <div className="flex items-center space-x-3">
          {/*Actions*/}
            <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 
             text-white rounded-xl hover:shadow-lg transition-all ">
              <Plus className="w-4 h-4"/>
              <span className="text-sm front-medium">New</span>
            </button>
          {/*Toggle*/}
              <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Sun className="w-5 h-5" />
              </button>
          {/*Notifications*/}
              <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>

            {/*Paramettre*/}
              <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            {/*¨Profil user*/}
              <div className="flex items-center space-x-3 pl-3 border-l border-slate-200
                dark:border-slate-700">
                  <img 
                  src="https://i.pinimg.com/736x/68/31/21/683121c580c8a2487664791da0ffb205.jpg" 
                  alt="user" 
                  className="w-8 h-8 rounded-full ring-2 ring-blue-500 "/>
                  <div className="hidden md:block">
                    <p className="text-sm font-meduim text-slate-500 dark:text-slate-400">Ange Gaetan KOROGO</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Administrateur</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400"/>
              </div> 

        </div>

      </div>

    </div>
  )
}

export default Header