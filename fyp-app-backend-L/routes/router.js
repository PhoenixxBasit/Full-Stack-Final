const express = require("express") 

const administratorController = require("../controllers/administratorController.js")
const facultySpecializationController = require("../controllers/administratorController.js")
const facultyController=require('../controllers/facultyController.js')
const panelController=require('../controllers/panelController.js')
const presentationController=require('../controllers/presentationController.js')
const projectdomainController=require('../controllers/projectdomainController.js')
const rubricController=require('../controllers/rubricController.js')
const studentController=require('../controllers/studentController.js')
const venueController=require('../controllers/venueController.js')






const administratorRouter = express.Router();
const facultySpecializationRouter = express.Router();
const facultyRouter=express.Router();
const panelRouter=express.Router();
const presentationRouter=express.Router();
const projectdomainRouter=express.Router();
const rubricRouter=express.Router();
const studentRouter=express.Router();
const venueRouter=express.Router();


administratorRouter.get("/", administratorController.getAll);
administratorRouter.get("/:id", administratorController.getOne);
administratorRouter.post("/", administratorController.post);
administratorRouter.patch("/:id", administratorController.update);
administratorRouter.delete("/:id", administratorController.deleteA);

facultySpecializationRouter.get("/", facultySpecializationController.getAll);
facultySpecializationRouter.get("/:id", facultySpecializationController.getOne);
facultySpecializationRouter.post("/", facultySpecializationController.post);
facultySpecializationRouter.patch("/:id", facultySpecializationController.update);
facultySpecializationRouter.delete("/:id", facultySpecializationController.deleteA);

facultyRouter.get("/", facultyController.getAll);
facultyRouter.get("/:id", facultyController.getOne);
facultyRouter.post("/", facultyController.post);
facultyRouter.patch("/:id", facultyController.update);
facultyRouter.delete("/:id", facultyController.deleteA);

panelRouter.get("/", panelController.getAll);
panelRouter.get("/:id", panelController.getOne);
panelRouter.post("/", panelController.post);
panelRouter.patch("/:id", panelController.update);
panelRouter.delete("/:id", panelController.deleteA);

presentationRouter.get("/", presentationController.getAll);
presentationRouter.get("/:id", presentationController.getOne);
presentationRouter.post("/", presentationController.post);
presentationRouter.patch("/:id", presentationController.update);
presentationRouter.delete("/:id", presentationController.deleteA);

projectdomainRouter.get("/", projectdomainController.getAll);
projectdomainRouter.get("/:id", projectdomainController.getOne);
projectdomainRouter.post("/", projectdomainController.post);
projectdomainRouter.get("/", projectdomainController.getAll);
projectdomainRouter.delete("/:id", projectdomainController.deleteA);

rubricRouter.get("/", rubricController.getAll);
rubricRouter.get("/:id", rubricController.getOne);
rubricRouter.post("/", rubricController.post);
rubricRouter.patch("/:id", rubricController.update);
rubricRouter.delete("/:id", rubricController.deleteA);

studentRouter.get("/", studentController.getAll);
studentRouter.get("/:id", studentController.getOne);
studentRouter.post("/", studentController.post);
studentRouter.patch("/:id", studentController.update);
studentRouter.delete("/:id", studentController.deleteA);

venueRouter.get("/", venueController.getAll);
venueRouter.get("/:id", venueController.getOne);
venueRouter.post("/", venueController.post);
venueRouter.patch("/:id", venueController.update);
venueRouter.delete("/:id", studentController.deleteA);





module.exports =  {
    administratorRouter,
    facultySpecializationRouter,
    facultyRouter,
    panelRouter,
    presentationRouter,
    projectdomainRouter,
    rubricRouter,
    studentRouter,
    venueRouter
};