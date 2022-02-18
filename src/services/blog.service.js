/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const { Request, Response, NextFunction } = require("express")

class BlogController {
	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	create = async (req, res, next) => {
		return res.json({ message: "New post" })
	}
	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	delete = async (req, res, next) => {
		return res.json({ message: "delete post" })
	}

	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	update = async (req, res, next) => {
		return res.json({ message: "update post" })
	}
	/**
	 *
	 * @param {Reaquest} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns
	 */
	getPosts = async (req, res, next) => {
		const posts = []
		for (let i = 0; i < 20; i++) {
			posts.push({
				id: i + 1,
				name: `Blog post ${i + 1}`,
				date: new Date().toISOString(),
			})
		}
		return res.json({ success: true, posts })
	}
}

module.exports = BlogController
