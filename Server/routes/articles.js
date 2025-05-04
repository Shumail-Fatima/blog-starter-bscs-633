const express = require('express')
const {
    createArticle,
    getArticles,
} = require('../controllers/articlesController')

const router = express.Router()

// get all articles
router.get('/',getArticles)

// get a single article
/*
router.get('/id',(req,res) => {
    res.json({mssg: 'get a single article'})
})

*/

router.post('/', createArticle)

/*
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete an article'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg: 'update an article'})
})

*/

module.exports = router