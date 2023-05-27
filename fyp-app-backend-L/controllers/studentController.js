const { Student } = require("../models/fyp-models");

const getAll = async (req, res) => {
    const students = await Student.find();
    if (students.length === 0) {
        return res.status(404).json({ message: "No students Found" });
    }
    res.status(200).json({ students });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const student = await Student.find({ _id: id });
    if (student.length === 0) {
        return res.status(404).json({ message: "No student Found" });
    }
    res.status(200).json({ student });
};

const post = async (req, res) => {
    const student = { ...req.body }
    const newData = new Student(student);
    await newData.save();
    res.status(200).json({ message: "student Added successfully" });
};

const update = async (req, res) => {

    const { id } = req.params;
    const result = await Student.findByIdAndUpdate(
        id, req.body
    )
    res.status(200).send(`student with id ${id} has been updated in the database.\nThese are new values ${result}`);
};

const deleteA = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Student.findByIdAndDelete({ _id: id });
        if (!deleted) {
            return res.status(404).json({ message: "student not found" });
        }
        res.status(200).json({ message: "student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAll, getOne, post, update, deleteA };