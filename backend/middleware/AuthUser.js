import User from "../models/UsersModel.js";
 
export const verifyUser = async (req, res, next) => {
    try {
        // Cek apakah sesi ada
        if (!req.session.userId) {
            return res.status(401).json({ msg: "Please login to your account first" });
        }
 
        // Cari user berdasarkan UUID di sesi
        const user = await User.findOne({
            where: {
                uuid: req.session.userId,
            },
        });
 
        // Jika user tidak ditemukan
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
 
        // Tambahkan properti ke req
        req.userId = user.id;
        req.role = user.role;
        next();
    } catch (error) {
        // Tangani error tak terduga
        console.error("Error in verifyUser middleware:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
};