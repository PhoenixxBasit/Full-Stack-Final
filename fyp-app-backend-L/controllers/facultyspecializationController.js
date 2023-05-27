const { FacultySpecialization } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const facultySpecializations = await FacultySpecialization.find();
    if (facultySpecializations.length === 0) {
        return res.status(404).json({ message: "No facultySpecialization Found" });
    }
    res.status(200).json({ facultySpecializations });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const facultySpecialization = await FacultySpecialization.find({ _id: id });
    if (facultySpecialization.length === 0) {
        return res.status(404).json({ message: "No facultySpecialization Found" });
    }
    res.status(200).json({ facultySpecialization });
};

const post = async (req, res) => {
    const facultySpecialization = { ...req.body }
    const newfacultySpecialization = new FacultySpecialization(facultySpecialization);
    await newfacultySpecialization.save();
    res.status(200).json({ message: "facultySpecialization Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await FacultySpecialization.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`facultySpecialization with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedfacultySpecialization = await FacultySpecialization.findByIdAndDelete({ _id: id });
        if (!deletedfacultySpecialization) {
            return res.status(404).json({ message: "facultySpecialization not found" });
        }
        res.status(200).json({ message: "facultySpecialization deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };