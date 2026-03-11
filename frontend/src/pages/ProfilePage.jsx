import { useState, useEffect } from "react";
import { api } from "../services/api";

const ProfilePage = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = JSON.parse(sessionStorage.getItem("user"));

        if (storedUser) {
            setUser(storedUser);
        }

    }, []);

    const updateProfile = async (file) => {

        if (!file) return;

        const formData = new FormData();

        formData.append("user_img", file);

        try {

            const res = await api.put(
                `/user/update/${user.user_id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            if (res.data.success) {

                sessionStorage.setItem(
                    "user",
                    JSON.stringify(res.data.data)
                );

                setUser(res.data.data);

            }

        } catch (error) {

            console.log(error);

        }

    };

    if (!user) return <h2>Loading...</h2>;

    return (
        <div>

            <h2>Profile Page</h2>

            {/* IMAGE SHOW */}
            <div>

                {user.user_img ? (

                    <img
                        src={`http://localhost:4870/${user.user_img}`}
                        alt="profile"
                        width="150"
                    />

                ) : (

                    <p>No Image</p>

                )}

            </div>

            {/* IMAGE UPLOAD */}
            <div>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => updateProfile(e.target.files[0])}
                />

            </div>

        </div>
    );
};

export default ProfilePage;