// controllers/ClientController.js
const Client = require('../models/Client');

// 2.3 Create some Client
const createClient = async (req, res) => {
  try {
    const { name, email, phone, companyId } = req.body;
    
    // Check if the company is taken by other clients
    const existingClient = await Client.findOne({ where: { companyId } });
    if (existingClient) {
      return res.status(400).json({ error: 'Company is already taken by another client' });
    }

    const newClient = await Client.create({ name, email, phone, companyId });
    res.json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 2.4 Change any Client field
const changeClientField = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Client.update(body, { where: { id } });
    res.json({ message: 'Client field(s) updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createClient,
  changeClientField,
};