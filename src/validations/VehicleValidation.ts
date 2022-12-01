import * as yup from 'yup'

export const createVehicleValidation = yup.object().shape({
  marca: yup.string().required(),
  modelo: yup.string().required(),
  ano: yup.number().required(),
  km: yup.number().required(),
  cor: yup.string().required(),
  chassi: yup.string().required(),
  price: yup.number().required()
})
