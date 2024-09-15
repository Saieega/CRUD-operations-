const express=require('express')
const router=express.Router()
const Alien=require('../Models/alien')

router.get('/',async(req,res)=>
{
    try{
        const aliens=await Alien.find()
        res.json(aliens)
    }
    catch(err) {
        res.send('Error'+err)
    }
})

router.get('/:id',async(req,res)=>
{
    try{
        const aliens=await Alien.findById(req.params.id)
        res.json(aliens)
    }
    catch(err){
        res.send('Error'+err)
    }
})
router.post('/',async(req,res)=>
{
    const alien=new Alien
    ({
        studentName: req.body.studentName,
        skillName: req.body.skillName,
        proficiency: req.body.proficiency,
        yearsOfExperience: req.body.yearsOfExperience,
        category: req.body.category,
        certified: req.body.certified
    })
    try{
        const a1=await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res)=>
{
    try {
        const alien=await Alien.findById(req.params.id);
        if (req.body.certified!==undefined){
            alien.certified=req.body.certified;
        }
        const a1=await alien.save();
        res.json(a1);
    }
    catch (err){
        res.send('Error'+err)
    }
})
router.delete('/:id',async(req,res)=>
{
    try{
        const alien=await Alien.findById(req.params.id)
        res.json("Student deleted successfully")
    } catch(err){
        res.send('Error'+err)
    }
})
module.exports=router