const { Administrator } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const administrators = await Administrator.find();
    if (administrators.length === 0) {
        return res.status(404).json({ message: "No Administrator Found" });
    }
    res.status(200).json({ administrators });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const administrator = await Administrator.find({ _id: id });
    if (administrator.length === 0) {
        return res.status(404).json({ message: "No Administrator Found" });
    }
    res.status(200).json({ administrator });
};

const post = async (req, res) => {
    const administrator = { ...req.body }
    const newAdministrator = new Administrator(administrator);
    await newAdministrator.save();
    res.status(200).json({ message: "Administrator Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Administrator.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`Administrator with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAdministrator = await Administrator.findByIdAndDelete({ _id: id });
        if (!deletedAdministrator) {
            return res.status(404).json({ message: "Administrator not found" });
        }
        res.status(200).json({ message: "Administrator deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };