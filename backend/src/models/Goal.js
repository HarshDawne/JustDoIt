const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            default: "General",
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },
        progress: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],
            default: "Pending",
        },
        targetDate: {
            type: Date,
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
