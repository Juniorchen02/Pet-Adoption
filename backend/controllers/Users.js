import argon2 from "argon2"
import Users from "../models/UsersModel.js"

const findUserById = async (uuid, res) => {
  const user = await Users.findOne({
    where: { uuid }
  })
  if (!user) return res.status(404).json({ msg: 'User not found' })
  return user
}

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ['uuid', 'name', 'email', 'role']
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await findUserById(req.params.id, res)
    if (!user) return
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body
  if (password !== confPassword) {
    return res
      .status(400)
      .json({ msg: 'Password and Confirm Password do not match' })
  }

  try {
    const hashPassword = await argon2.hash(password)
    await Users.create({
      name,
      email,
      password: hashPassword,
      role
    })
    res.status(201).json({ msg: 'Registration successful' })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await findUserById(req.params.id, res)
    if (!user) return;

    const { name, email, password, confPassword, role } = req.body
    let hashPassword = user.password // Default to current password if none is provided

    if (password && password !== "") {
      if (password !== confPassword)
        return res
          .status(400)
          .json({ msg: 'Password and Confirm Password do not match' })
      hashPassword = await argon2.hash(password)
    }

    await Users.update(
      { name, email, password: hashPassword, role },
      { where: { uuid: user.uuid } }
    )
    res.status(200).json({ msg: 'User Updated' })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await findUserById(req.params.id, res)
    if (!user) return;

    await Users.destroy({
      where: { uuid: user.uuid }
    })
    res.status(200).json({ msg: 'User Deleted' })
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(400).json({ msg: error.message })
  }
}
