import express from 'express';
import { addMember, createProject, updateProject } from '../controllers/projcetController.js';

const projectRouter = express.Router();

projectRouter.post('/', createProject)
//projectRouter.putt('/', updateProject)
projectRouter.post('/projectId/addMember', addMember)

export default projectRouter