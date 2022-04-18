import React, { useEffect } from "react";
import Footer from "@components/Footer";
import mitraisLogo from "@public/img/mitrais-logo.png";
import Image from "next/image";

import { connect, useDispatch } from "react-redux";
import {
  authenticate,
  checkServerSideCookie,
} from "../redux/actions/authAction";
import { wrapper } from "../redux";
import Router from "next/router";
import Head from "@components/Head";
import jsCookie from "js-cookie";
import { bindActionCreators } from "redux";


const SignIn = ({ authenticate, auth, error, token, state }) => {
  // const [error, setError] = React.useState("");
  const dispatch = useDispatch();

  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log("token", state);
    // console.log("BASE PATH", process.env.NEXT_PUBLIC_API_URL);
    if (jsCookie.get("token")) {
      Router.push("/");
    }
    dispatch({
      type: "AUTHENTICATE_ERROR",
      payload: null,
    });
    // console.log('init sign in page');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  function signIn() {
    // let status = 
    authenticate(loginData);
    // console.log("auth", auth);
    // setTimeout(() => {
    //   if (!status) {
    //     setError("Username / Password is incorrect");
    //     setTimeout(() => {
    //       setError("");
    //     }, 5000);
    //   }
    // }, 3000);

    // console.log(loginData);
    // axios.post(process.env.NEXT_PUBLIC_API_URL+"auth/login", loginData)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("username", res.data.username);
    //     localStorage.setItem("id", res.data.id);

    //     window.location.href = "/";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError("Username / Password is incorrect");
    //   });
  }

  return (
    <>
      <Head title="Sign In" />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-orange-700"
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/creativetimofficial/tailwind-starter-kit/main/Login%20Page/react-login-page/src/assets/img/register_bg_2.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                  <div className="flex-auto px-4 lg:px-10 pb-3 pt-2">
                    <div className="text-gray-500 text-center my-3">
                      <Image src={mitraisLogo} alt="logo"></Image>
                    </div>
                    <form>
                      <div id="errorMsg" className="bg-red-500 text-center text-white my-3 rounded animate-pulse">
                        {error}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Username
                        </label>
                        <input
                          id="username"
                          name="username"
                          onKeyUp={
                            (e) => {
                              if (e.key === "Enter") {
                                signIn();
                              }
                            }
                          }
                          onChange={handleChange}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Username"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          onKeyUp={
                            (e) => {
                              if (e.key === "Enter") {
                                signIn();
                              }
                            }
                          }
                          onChange={handleChange}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          type="button"
                          id="login-button"
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => signIn()}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

// create function to get server side props
// export const getServerSideProps = async (ctx) => {
//   const { token } = checkServerSideCookie(ctx);
//   return { token };
// };

// export const getServerSideProps = wrapper.getServerSideProps((context) => {
//   async function fetchData() {
//     const { token } = checkServerSideCookie(context);
//     console.log(token);
//     // const token = context.store.getState().authentication.token;
//     return { props: { token } };
//     // await checkServerSideCookie(context);
//   }

//   // return {
//   //   props: {
//   //     token,
//   //   },
//   // };
// });

// export default connect((state) => state, { authenticate })(SignIn);
// export default SignIn;

const mapStateToProps = (state) => ({
  token: state.authentication.token,
  auth: state.authentication,
  error: state.authentication.error,
  state: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
      authenticate: bindActionCreators(authenticate, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);