import express, { Request, Response } from 'express'
import Pokemon from '../interfaces/Pokemon'
import sortAlphabetically from '../interfaces/Pokemon/sort-alphabetically.js'
import sortByPokedex from '../interfaces/Pokemon/sort-by-pokedex.js'
import data from '../pokemon.json' assert { type: 'json' }

const router = express.Router()
const pokemon = data as Pokemon[]
const byName = sortAlphabetically(pokemon)
const byPokedex = sortByPokedex(pokemon)

// GET /
router.get('/', (req: Request, res: Response) => {
  res.render('home', { pokemon: byPokedex, sort: 'pokedex' })
})

// GET /by-name
router.get('/by-name', (req: Request, res: Response) => {
  res.render('home', { pokemon: byName, sort: 'name' })
})

// GET /by-pokedex
router.get('/by-pokedex', (req: Request, res: Response) => {
  res.render('home', { pokemon: byPokedex, sort: 'pokedex' })
})

export default router
