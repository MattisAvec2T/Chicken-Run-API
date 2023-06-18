const express = require('express');
const router = express.Router();
const Chicken = require('../models/chicken.js');

// GET /chicken
router.get('/', async (req, res) => {
    try
    {
        const chickens = await Chicken.find();
        res.json(chickens);
    }
    catch (error)
    {
        res.status(500).json(
            { message: error.message }
        );
    }
});

// POST /chicken
router.post('/', async (req, res) => {
    try
    {
        const chicken = new Chicken(req.body);
        await chicken.save();
        res.status(201).json(chicken);
    }
    catch (error)
    {
        res.status(400).json(
            { message: error.message }
        );
    }
});

// PUT /chicken/:id
router.put('/:id', getChicken, async (req, res) => {
    try
    {
        const chicken = await Chicken.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, overwrite: true }
        );
        res.json(chicken);
    }
    catch (error)
    {
        res.status(400).json({ message: error.message });
    }
});

// PATCH /chicken
router.patch('/', async (req, res) => {
    try
    {
        const chickens = await Chicken.find();
       
        for (const chicken of chickens)
        {
            if (chicken.isRunning) {
                chicken.steps += 1;
            }
        }
        await Promise.all(chickens.map(chicken => chicken.save()));

        res.json(chickens);
    }
    catch (error)
    {
        res.status(400).json(
            { message: error.message }
        );
    }
});

// PATCH /chicken/run/:id
router.patch('/run/:id', getChicken, async (req, res) => {
    try
    {
        const chicken = await Chicken.findById(req.params.id);
        chicken.isRunning = !chicken.isRunning;
        await chicken.save();
        res.json(chicken);
    }
    catch (error)
    {
        res.status(400).json(
            { message: error.message }
        );
    }
  });
  

// DELETE /chicken/:id
router.delete('/:id', getChicken, async (req, res) => {
    try
    {
        await Chicken.findByIdAndDelete(req.params.id);
        res.json(
            {message: `deleted chicken (${req.params.id})`}
        );
    }
    catch (error)
    {
        res.status(500).json(
            { message: error.message }
        );
    }
});

// Middleware
async function getChicken(req, res, next)
{
    try
    {
        const chicken = await Chicken.findById(req.params.id);
        if (!chicken)
        {
            return res.status(404).json(
                { message: `Chicken (${req.params.id}) not found` }
            );
        }
    }
    catch (error)
    {
        return res.status(500).json(
            { message: error.message }
        );
    }
    next();
}

module.exports = router;