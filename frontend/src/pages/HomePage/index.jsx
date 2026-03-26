import { useState } from "react";

import useUsers from "../../hooks/useUsers";
import SearchBarComponent from "../../components/SearchBarComponent";
import UserComponent from "../../components/UserComponent";
import NavBarComponent from "../../components/NavBarComponent";
import "./index.css";

const HomePage = () => {
  const { userData, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let fieldA;
    let fieldB;
    if (sortOption === "name") {
      fieldA = a.name.toLowerCase();
      fieldB = b.name.toLowerCase();
    } else if (sortOption === "company") {
      fieldA = a.company.name.toLowerCase();
      fieldB = b.company.name.toLowerCase();
    }
    if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className='home-page'>
      <NavBarComponent />
      <div className='home-content'>
        <h1 className="home-page-heading">All Users</h1>
        <SearchBarComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSortOption={setSortOption}
          setSortOrder={setSortOrder}
        />
        {loading && <p style={{ textAlign: "center" }}>Loading users...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className='table-container'>
            <table className='user-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.map((user) => (
                  <UserComponent key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
