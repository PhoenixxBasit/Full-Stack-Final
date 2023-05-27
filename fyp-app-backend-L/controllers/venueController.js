const { Venue } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const venues = await Venue.find();
    if (venues.length === 0) {
        return res.status(404).json({ message: "No venues Found" });
    }
    res.status(200).json({ venues });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const venue = await Venue.find({ _id: id });
    if (venue.length === 0) {
        return res.status(404).json({ message: "No venue Found" });
    }
    res.status(200).json({ venue });
};

const post = async (req, res) => {
    const venue = { ...req.body }
    const newData = new Venue(venue);
    await newData.save();
    res.status(200).json({ message: "venue Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Venue.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`venue with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Venue.findByIdAndDelete({ _id: id });
        if (!deleted) {
            return res.status(404).json({ message: "venue not found" });
        }
        res.status(200).json({ message: "venue deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };