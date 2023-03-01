import express, { Request, Response } from 'express'
import sortAlphabetically from '../interfaces/Pokemon/sort-alphabetically.js'
import sortByPokedex from '../interfaces/Pokemon/sort-by-pokedex.js'
import data from '../pokemon.json' assert { type: 'json' }

const router = express.Router()

// GET /
router.get('/', (req: Request, res: Response) => {
  const pokemon = sortByPokedex(data)
  res.render('home', { pokemon, sort: 'pokedex' })
})

// GET /by-name
router.get('/by-name', (req: Request, res: Response) => {
  const pokemon = sortAlphabetically(data)
  res.render('home', { pokemon, sort: 'name' })
})

// GET /by-pokedex
router.get('/by-pokedex', (req: Request, res: Response) => {
  const pokemon = sortByPokedex(data)
  res.render('home', { pokemon, sort: 'pokedex' })
})

export default router
