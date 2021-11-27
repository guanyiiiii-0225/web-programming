import express from 'express';
import saveScoreCard from './api/saveScoreCard';
import deleteScoreCard from './api/deleteScoreCard';
import queryScoreCard from './api/queryScoreCard';
const router = express.Router()


router.post('/create-card', (req, res) => {
    saveScoreCard(req, res);
})

router.delete('/clear-db', (req, res) => {
    deleteScoreCard(req,res);
})



router.get('/query-cards', (req, res) => {
  console.log(req.query);
  queryScoreCard(req,res);
})

export default router