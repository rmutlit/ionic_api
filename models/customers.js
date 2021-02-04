const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        c_id: String, // รหัสลูกค้า
        c_name: String ,// ชื่อจริงลูกค้า
        c_lastname: String, // นามสกุลลูกค้า
        c_email: String, // อีเมลลูกค้า
        c_tel: Number, // เบอร์โทรศัพท์ลูกค้า

    },
    {
        timestamps: true,
        collection: "customers"

    }
)

module.exports = mongoose.model("customers",schema)
