import axios from "axios";
import { useEffect, useState } from "react";
import dateTimeTH from "../functions/dateformat";
// eslint-disable-next-line react/prop-types
const CardProfile = ({ id, token_ }) => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  const [users, setUsers] = useState({
    name: "",
    email: "",
    role: "",
    updatedAt: "",
  });

  useEffect(() => {
    if (token_ && id) {
      setToken(token_);
      setUserId(id);
      if (userId) {
        getProfile();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, token_]);

  const getProfile = async () => {
    // console.log("user id :", userId);
    const response = await axios.get(`${apiUrl}/api/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUsers(response.data);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${apiUrl}/api/profile/${userId}`,
        users,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const ToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-16">
        <div className="flex justify-end px-4 pt-4"></div>

        {isEdit ? (
          <form onSubmit={updateProfile}>
            <div className="flex flex-col items-start pb-10 gap-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Bonnie image"
              />

              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ชื่อ :
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    value={users.name}
                    onChange={(e) =>
                      setUsers({ ...users, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="mail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail :
                  </label>

                  <p>{users.email}</p>
                </div>
                <div>
                  <label
                    htmlFor="mail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ระดับผู้ใช้ :
                  </label>

                  <p>{users.role}</p>
                </div>
                <div>
                  <label
                    htmlFor="mail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    วันเวลาที่อัพเดท :
                  </label>

                  <p>{dateTimeTH(users.updatedAt)}</p>
                </div>
              </div>

              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  onClick={ToggleEdit}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-start pb-10 gap-4">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              <p>ชื่อ : {users.name}</p>
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <p>E-mail : {users.email}</p>
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              <p>ระดับผู้ใช้ : {users.role}</p>
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              <p>
                วันเวลาที่อัพเดท : <br /> {dateTimeTH(users.updatedAt)}
              </p>
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                onClick={ToggleEdit}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Edit
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardProfile;
