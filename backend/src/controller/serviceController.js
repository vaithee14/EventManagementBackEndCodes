const ServicesModels = require("../modals/serviceModel");
// Create a Nwe services
const addServices = async (req, res) => {
  try {
    const { servicesName,imageUrl } = req.body;

    // Check if services already exists
    const existingService = await ServicesModels.findOne({ servicesName });
    if (existingService) {
      return res.status(400).json({ error: "Services already exists" });
    }
    const service = await ServicesModels.create({ servicesName,imageUrl });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Services" });
  }
};

// get all services
const getService = async (req, res) => {
  try {
    const Services = await ServicesModels.find();
    res.json(Services);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Services" });
  }
};

module.exports = { addServices, getService };
