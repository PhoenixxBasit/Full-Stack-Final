const { Presentation } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const presentations = await Presentation.find();
    if (presentations.length === 0) {
        return res.status(404).json({ message: "No presentations Found" });
    }
    res.status(200).json({ presentations });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const presentation = await Presentation.find({ _id: id });
    if (presentation.length === 0) {
        return res.status(404).json({ message: "No presentation Found" });
    }
    res.status(200).json({ presentation });
};

const post = async (req, res) => {
    const presentation = { ...req.body }
    const newPresentation = new Presentation(presentation);
    await newPresentation.save();
    res.status(200).json({ message: "presentation Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Presentation.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`presentation with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPresentation = await Presentation.findByIdAndDelete({ _id: id });
        if (!deletedPresentation) {
            return res.status(404).json({ message: "presentation not found" });
        }
        res.status(200).json({ message: "presentation deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };