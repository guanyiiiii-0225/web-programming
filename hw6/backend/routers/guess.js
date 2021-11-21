import express from 'express'
import { getNumber, genNumber } from '../core/getNumber'
const router = express.Router()

function roughScale(x, base){
    const parsed = parseInt(x, base)
    if(isNaN(parsed)){
        return 0
    }
    return parsed
}

router.post('/start', (_, res) => {
  genNumber()  // 用亂數產生一個猜數字的 number
  res.json({ msg: 'The game has started.' })
})


router.get('/guess', (req, res) => {
  const number = getNumber()
  const guessed = roughScale(req.query.number, 10)
  // check if NOT a num or not in range [1,100]
  if (!guessed || guessed < 1 || guessed > 100) {
    res.status(406).send({ msg: 'Not a legal number.' })
  } else if (number === guessed) { 
    res.status(200).send({ msg: 'Equal' })
  } else if (number > guessed) { // Bigger
    res.status(200).send({ msg: 'Bigger' })
  } else if (number < guessed) { // Smaller
    res.status(200).send({ msg: 'Smaller' })
  }
})


router.post('/restart', (_, res) => { 
    genNumber()  // 用亂數產生一個猜數字的 number
    res.json({ msg: 'The game has restarted.' })
 })


export default router
