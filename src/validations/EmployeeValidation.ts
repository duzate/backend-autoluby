import * as yup from 'yup'

export const loginValidation = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required()
})

export const updateValidation = yup.object().shape({
  email: yup.string().optional().email(),
  password: yup.string().optional().min(8, 'A senha precisa ter no mínimo 8 caracteres').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]/,
    'A senha precisa ter no mínimo uma letra maiúscula e uma letra minúscula e número'
  ),
  bio: yup.string().optional(),
  avatar: yup.string().optional()
})

export const createValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().optional().min(8, 'A senha precisa ter no mínimo 8 caracteres').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]/,
    'A senha precisa ter no mínimo uma letra maiúscula e uma letra minúscula e um número'
  ),
  bio: yup.string().optional(),
  avatar: yup.string().optional()
})
