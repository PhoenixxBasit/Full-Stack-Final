const { Panel } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const panels = await Panel.find();
    if (panels.length === 0) {
        return res.status(404).json({ message: "No panels Found" });
    }
    res.status(200).json({ panels });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const panel = await Panel.find({ _id: id });
    if (panel.length === 0) {
        return res.status(404).json({ message: "No panel Found" });
    }
    res.status(200).json({ panel });
};

const post = async (req, res) => {
    const panel = { ...req.body }
    const newPanel = new Panel(panel);
    await newPanel.save();
    res.status(200).json({ message: "panel Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Panel.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`panel with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedpanel = await Panel.findByIdAndDelete({ _id: id });
        if (!deletedpanel) {
            return res.status(404).json({ message: "panel not found" });
        }
        res.status(200).json({ message: "panel deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };