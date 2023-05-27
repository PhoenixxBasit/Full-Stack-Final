const { Rubric } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const rubrics = await Rubric.find();
    if (rubrics.length === 0) {
        return res.status(404).json({ message: "No rubrics Found" });
    }
    res.status(200).json({ rubrics });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const rubric = await Rubric.find({ _id: id });
    if (rubric.length === 0) {
        return res.status(404).json({ message: "No rubric Found" });
    }
    res.status(200).json({ rubric });
};

const post = async (req, res) => {
    const rubric = { ...req.body }
    const newData = new Rubric(rubric);
    await newData.save();
    res.status(200).json({ message: "rubric Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Rubric.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`rubric with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Rubric.findByIdAndDelete({ _id: id });
        if (!deleted) {
            return res.status(404).json({ message: "rubric not found" });
        }
        res.status(200).json({ message: "rubric deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };