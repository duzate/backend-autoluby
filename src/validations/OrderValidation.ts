import * as yup from 'yup'

export const createOrderValidation = yup.object().shape({
  employeeId: yup.string().required(),
  vehicleId: yup.string().required(),
  selled: yup.number().required(),
  status: yup.string().required(),
})
