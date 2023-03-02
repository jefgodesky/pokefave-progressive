import express, { Request, Response } from 'express'
import sortAlphabetically from '../interfaces/Pokemon/sort-alphabetically.js'
import sortByPokedex from '../interfaces/Pokemon/sort-by-pokedex.js'
import data from '../pokemon.json' assert { type: 'json' }

const router = express.Router()

const getFavesOnly = (req: Request): boolean => {
  return req.query.faves !== undefined
}

// GET /
router.get('/', (req: Request, res: Response) => {
  const pokemon = sortByPokedex(data)
  res.render('home', { pokemon, sort: 'pokedex', favesOnly: getFavesOnly(req) })
})

// GET /by-name
router.get('/by-name', (req: Request, res: Response) => {
  const pokemon = sortAlphabetically(data)
  res.render('home', { pokemon, sort: 'name', favesOnly: getFavesOnly(req) })
})

// GET /by-pokedex
router.get('/by-pokedex', (req: Request, res: Response) => {
  const pokemon = sortByPokedex(data)
  res.render('home', { pokemon, sort: 'pokedex', favesOnly: getFavesOnly(req) })
})

export default router
