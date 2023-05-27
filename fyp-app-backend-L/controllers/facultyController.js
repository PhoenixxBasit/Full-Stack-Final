const { Faculty } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const faculties = await Faculty.find();
    if (faculties.length === 0) {
        return res.status(404).json({ message: "No faculty Found" });
    }
    res.status(200).json({ faculties });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculty.find({ _id: id });
    if (faculty.length === 0) {
        return res.status(404).json({ message: "No faculty Found" });
    }
    res.status(200).json({ faculty });
};

const post = async (req, res) => {
    const faculty = { ...req.body }
    const newfaculty = new Faculty(faculty);
    await newfaculty.save();
    res.status(200).json({ message: "faculty Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Faculty.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`faculty with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedfaculty = await Faculty.findByIdAndDelete({ _id: id });
        if (!deletedfaculty) {
            return res.status(404).json({ message: "faculty not found" });
        }
        res.status(200).json({ message: "faculty deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };