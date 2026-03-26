import "./index.css";

const SearchBarComponent = ({ searchTerm, setSearchTerm, setSortOption, setSortOrder }) => {
  return (
    <div className='search-bar'>
      <div className='search-bar-content'>
        <input
          type='text'
          placeholder='Search users by name...email...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            className='search-input'
        />
        <select className='search-filter' onChange={(e) => setSortOption(e.target.value)}>

          <option value='name'>Name</option>
          <option value='company'>Company</option>
        </select>
        <select className='search-filter' onChange={(e) => setSortOrder(e.target.value)}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </div>
    </div>
  );
};
export default SearchBarComponent;
