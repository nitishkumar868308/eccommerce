export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 text-gray-300 dark:text-gray-700 py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left */}
        <p className="text-sm">© {new Date().getFullYear()} MyStore. All rights reserved.</p>

        {/* Right */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white dark:hover:text-black">Privacy</a>
          <a href="#" className="hover:text-white dark:hover:text-black">Terms</a>
          <a href="#" className="hover:text-white dark:hover:text-black">Support</a>
        </div>
      </div>
    </footer>
  );
}
