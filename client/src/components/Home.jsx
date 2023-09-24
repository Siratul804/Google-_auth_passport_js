import React, { useState, useEffect } from "react";

const Home = () => {
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
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div>
      <main>
        {user ? (
          <>
            {" "}
            <div className="text-7xl flex justify-center text-lime-400 py-10 pt-48">
              Successfully Get Access To Passport Page
            </div>
          </>
        ) : (
          <>
            <div className="">
              <h1 className="text-4xl font-bold text-center p-4 ">
                <span className="text-[#ff0000]"> Google </span>{" "}
                <span className="text-[#0000FF]">Log-In</span>
              </h1>
              <hr className="container mx-auto" />
              <div className="flex justify-center pt-32 ">
                <div
                  className="bg-white p-6 drop-shadow-md hover:drop-shadow-xl rounded-lg"
                  onClick={google}
                >
                  <img
                    className="rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
                    alt=""
                    height="auto"
                    width="100px"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
