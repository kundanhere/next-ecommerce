'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();

  // handle search form submit event
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search') as string;
    // navigate to the search term field
    if (searchTerm) {
      router.push(`/list?name=${searchTerm}`);
    }
  };

  return (
    <form
      className="flex flex-1 items-center justify-between gap-4 bg-gray-100 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
