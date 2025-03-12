const Companys = require('../models/companySchema');
// Get all Companies
const getCompany = async (req, res) => {
    try {
      const companyData = await Companys.find()
      res.json(companyData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const postList = async(req,res) =>{
    console.log('POST list');
    try {
        console.log(req.body);
        const {cid,cname,contact,location,type} = req.body;
    const newCompanyData = new Companys({cid,cname,contact,location,type});
    const company = await newCompanyData.save();
    res.status(201).json(company);

    } catch (error) {
        res.status(500).json({message:"Error saving company"});
    }
}

module.exports = {getCompany,postList}

