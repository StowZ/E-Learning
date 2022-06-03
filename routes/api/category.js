let catmodel=require('../../models/Category')
let express=require('express')
let router= express.Router()

router.post('/category/add', (req, res)=>{
    if(!req.body){
        return res.status(400).send("request body is missing")
    }

    let model=new catmodel(req.body)
    model.save()
    .then(doc=>{
        if(!doc ||doc.length===0){
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)

    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

router.get('/category', (req, res) => {
    catmodel.findOne({
        _id: req.query.id
    })
        .then(doc => {
            
            res.json(doc)
            
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/category/', (req, res) => {
    catmodel.findOneAndUpdate({
        _id: req.query.id
    }, req.body,{
        new:true
    })
        .then(doc => {
            
            res.json(doc)
            
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/categories', (req, res) => {
    catmodel.find()
        .then(doc => {
            res.setHeader('Content-Range', 'users 0-5/5');
            res.json(doc)
            
        })
        .catch(err => {
            res.status(500).json(err)
        })
        
            
})

router.delete("/category", (req, res) => { 
    catmodel
      .findOneAndRemove({
        _id: req.query.id
      })
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


module.exports = router