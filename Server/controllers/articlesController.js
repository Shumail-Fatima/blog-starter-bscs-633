const Article = require('../models/articles')

// get all articles

const getArticles = async (req,res) => {
    try {
        const articles = await Article.find({}).sort({ date: -1 }); // Fetch articles from the database
        res.status(200).json(
            articles.map((a) => ({
                id: a._id,       // Rename _id to id for frontend compatibility
                title: a.title,
                body: a.body,
                date: a.date,
            }))
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}





// create a new article 
const createArticle = async(req,res) => {
    const { title, body } = req.body;

    try {
        const article = await Article.create({
            _id: Date.now().toString(), // Generate a unique ID
            date: new Date(),
            title,
            body,
        });
        res.status(201).json({
            id: article._id,
            title: article.title,
            body: article.body,
            date: article.date,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createArticle,
    getArticles
}

// link for frontend = http://localhost:5173/api/articles