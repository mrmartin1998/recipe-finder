export default function SearchBar({ onSearch }) {
  return (
    <div className="form-control w-full max-w-2xl mx-auto mb-8">
      <div className="input-group">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search recipes..." 
            className="input input-bordered w-full pl-10" 
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        
      </div>
    </div>
  );
}
