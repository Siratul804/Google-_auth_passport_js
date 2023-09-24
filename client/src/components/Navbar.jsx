import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject.user._json);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <main>
      {user ? (
        <>
          <div className="nav flex justify-between bg-black ">
            <Link to="/" className="text-3xl text-white px-5 py-5 font-bold ">
              Passport
            </Link>
            <div className="flex flex-row">
              <img
                className="rounded-full p-4 "
                src={user._json.picture}
                height="auto"
                width="80"
              />
              <button className="text-3xm text-[#50d71e] mr-5 font-bold ">
                {user._json.given_name}
              </button>
              <button
                onClick={logout}
                className="text-3xm text-[#ff0000] mr-5 font-bold "
              >
                Log Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav flex justify-between bg-black ">
            <Link to="/" className="text-3xl text-white px-5 py-5 font-bold ">
              Passport
            </Link>
            <div className="flex flex-row">
              <button className="text-3xm text-[#50d71e] mr-5 font-bold ">
                Log In
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Navbar;
