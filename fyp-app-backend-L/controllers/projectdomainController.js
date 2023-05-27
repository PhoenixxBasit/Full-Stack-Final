const { ProjectDomain } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const projectDomains = await ProjectDomain.find();
    if (projectDomains.length === 0) {
        return res.status(404).json({ message: "No projectDomains Found" });
    }
    res.status(200).json({ projectDomains });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const projectDomain = await ProjectDomain.find({ _id: id });
    if (projectDomain.length === 0) {
        return res.status(404).json({ message: "No projectDomain Found" });
    }
    res.status(200).json({ projectDomain });
};

const post = async (req, res) => {
    const projectDomain = { ...req.body }
    const newData = new ProjectDomain(projectDomain);
    await newData.save();
    res.status(200).json({ message: "projectDomain Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await ProjectDomain.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`projectDomain with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await ProjectDomain.findByIdAndDelete({ _id: id });
        if (!deleted) {
            return res.status(404).json({ message: "projectDomain not found" });
        }
        res.status(200).json({ message: "projectDomain deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };