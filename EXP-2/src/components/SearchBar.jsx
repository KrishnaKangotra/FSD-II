import { useDispatch, useSelector } from "react-redux";

import {
  changeSearch,
  changeFilter,
} from "../features/searchSlice";

function SearchBar() {

  const dispatch = useDispatch();

  const search = useSelector(
    (state) => state.search.search
  );

  const filterPlatform = useSelector(
    (state) => state.search.filterPlatform
  );

  return (

    <div className="section">

      <label>Search Posts</label>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          dispatch(changeSearch(e.target.value))
        }
      />

      <br />
      <br />

      <label>Filter Platform</label>

      <select
        value={filterPlatform}
        onChange={(e) =>
          dispatch(changeFilter(e.target.value))
        }
      >

        <option>All</option>
        <option>Facebook</option>
        <option>LinkedIn</option>
        <option>Instagram</option>
        <option>X</option>

      </select>

    </div>

  );

}

export default SearchBar;