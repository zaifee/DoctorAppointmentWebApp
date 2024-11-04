import express from 'express'
import { doctorList, loginDoctor, appointmentDoctor, appointmentComplete, appointmentCancel,
    doctorDashBorad, doctorProfile,
    updateDoctorProfile} from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointment',authDoctor, appointmentDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashBorad)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)


export default doctorRouter