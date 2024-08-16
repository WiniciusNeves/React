const express = require('express');
const BillingCycle = require('./billingCycle');
const mongoose = require('mongoose');
const router = express.Router();



router.get('/count', async (req, res, next) => {
    try {
        const count = await BillingCycle.countDocuments();
        res.json({ value: count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/summary', async (req, res, next) => {
    try {
        const summary = await BillingCycle.aggregate([
            {
                $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }

            },
            {
                $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
            },
            { $project: { _id: 0, credit: 1, debt: 1 } }
        ]);
        res.json(summary);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

})
router.get('/', async (req, res) => {
    try {
        const billingCycles = await BillingCycle.find();
        res.json(billingCycles);
    } catch (err) {
        res.status(500).json({ mensagem: 'Falha ao buscar ciclos de faturamento' });
        console.log(err);
    }
});

// Obter um ciclo de faturamento por ID
router.get('/:id', async (req, res) => {
    try {
        const billingCycle = await BillingCycle.findById(req.params.id);
        if (billingCycle) {
            res.json(billingCycle);
        } else {
            res.status(404).json({ mensagem: 'Ciclo de faturamento não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ mensagem: 'Falha ao buscar ciclo de faturamento', erro: err.message });
    }
});

// Criar um novo ciclo de faturamento
router.post('/', async (req, res) => {
    try {
        const newBillingCycle = new BillingCycle(req.body);
        await newBillingCycle.save();
        res.status(201).json(newBillingCycle);
    } catch (err) {
        res.status(400).json({ mensagem: 'Falha ao criar ciclo de faturamento', erro: err.message });
    }
});

// Atualizar um ciclo de faturamento existente
router.put('/:id', async (req, res) => {
    try {
        const updatedBillingCycle = await BillingCycle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedBillingCycle) {
            res.json(updatedBillingCycle);
        } else {
            res.status(404).json({ mensagem: 'Ciclo de faturamento não encontrado' });
        }
    } catch (err) {
        res.status(400).json({ mensagem: 'Falha ao atualizar ciclo de faturamento', erro: err.message });
    }
});

// Excluir um ciclo de faturamento
router.delete('/:id', async (req, res) => {
    try {
        const deletedBillingCycle = await BillingCycle.findByIdAndDelete(req.params.id);
        if (deletedBillingCycle) {
            res.json({ mensagem: 'Ciclo de faturamento excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Ciclo de faturamento não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ mensagem: 'Falha ao excluir ciclo de faturamento', erro: err.message });
    }
});

module.exports = router;
