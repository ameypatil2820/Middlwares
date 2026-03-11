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