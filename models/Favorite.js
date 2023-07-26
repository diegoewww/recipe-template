const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Favorite", FavoriteSchema);