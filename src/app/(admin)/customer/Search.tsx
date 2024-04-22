'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useParams } from 'next/navigation';

const Search = ({ callbackfunc }: { callbackfunc: any }) => {
  const searchParams = useSearchParams();
  const firstName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(async (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('id', term);
    } else {
      params.delete('id');
    }
    replace(`${firstName}?${params.toString()}`);

    // Make a GET request to your API
    const Paramter = useParams();
    const id = Paramter.prams[0];
    const response = await fetch(
      `http://localhost:3000/api/admin/customer/${id}`
    );
    const data = await response.json();
    console.log(data);
  }, 300);

  return (
    <div className="relative flex flex-1 ml-9 mr-9 border-1">
      <input
        type="text"
        className="input input-bordered input-accent w-full"
        placeholder="Search..."
        onChange={e => {  handleSearch(e.target.value);
            callbackfunc()}}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default Search;
