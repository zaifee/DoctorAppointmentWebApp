import express from 'express'
import { addDoctor, allDoctors, loginAdmin, appointmentAdmin,appointmentCancel,adminDashboard } from '../controllers/adminController.js' 
import upload from '../middlewares/multer.js'
import multer from 'multer'
import authAdmin from '../middlewares/authAdmin.js';
import {changeAvailability} from '../controllers/doctorController.js';


//first we need to create router instance 

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'), addDoctor)
adminRouter.post('/login', loginAdmin) 
adminRouter.post('/all-doctors',authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
adminRouter.get('/appointments', authAdmin, appointmentAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

export default adminRouter
