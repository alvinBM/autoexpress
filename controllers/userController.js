const userController = {

        login: (req, res) => {
            res.status(200).json({
                status: 200,
                message: "Login user"
            });
        }

}

export default userController;