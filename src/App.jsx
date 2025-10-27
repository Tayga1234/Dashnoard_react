import React, { useState } from 'react';
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); 
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg_gradient-to-br from-slate-50 via-bleu-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to--slate-900 transition:all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          collapsed= {sidebarCollapsed} 
          onToggle ={()=> setSidebarCollapsed(!sidebarCollapsed)} 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header sidebarCollapsed={sidebarCollapsed} onToggleSidebar={()=> setSidebarCollapsed(!sidebarCollapsed)} />
          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>
              {currentPage === "dashboard" && <Dashboard />}
            </div>
          </main>
        </div>
      </div>
      
    </div>
  )
}

export default App