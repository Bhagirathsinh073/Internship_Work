const express = require('express');
const {postList, getCompany } = require('../Controller/company-controller');

const router = express.Router();


router.get('/company',getCompany)
router.post('/companypost',postList)


module.exports = router;