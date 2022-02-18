/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const { Request, Response, NextFunction } = require("express")

class UseController {
	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	register = async (req, res, next) => {
		return res.json({ message: "Register" })
	}
	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	login = async (req, res, next) => {
		return res.json({ message: "Login" })
	}

	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	updateprofile = async (req, res, next) => {
		return res.json({ message: "Update profile" })
	}
}

module.exports = UseController
