var express = require('express')
var router = express.Router()
var DepositAccount = require('./models/depositAccount.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('API Homepage')
})
// Returns info about yours truly
router.get('/depositAccounts', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
  setTimeout(function() {
    res.send(JSON.stringify([{"name": "Checking Account",
        "number": "1234567898",
        "balance": 12.34 },{"name": "Savings Account",
            "number": "1234567898",
            "balance": 120.34 },{"name": "Retirement Account",
                "number": "1234567898",
                "balance": 1200.34 },{"name": "Travel Account",
                    "number": "1234567898",
                    "balance": 100.34 }]));
  }, 2000);
})
router.route('/deposits')
    // Return all depositAccountss
    .get(function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        DepositAccount.find({}, function(err, depositAccounts) {
            if (err) throw err;

            // object of all the depositAccounts
            res.json(depositAccounts);
        });
    });
router.route('/addDeposit')
    .get(function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        DepositAccount.create({"name": "Checking Account", "number": "1234567898", "balance": 12.34 },
        function (err, account) {
          if (err) return handleError(err);
          // saved!
          res.send(JSON.stringify({'success': true, 'account': account}));
        });
    })
module.exports = router

const mockDepositAccount = '[   \
    {   \
        "name": "Checking Account", \
        "number": "1234567898", \
        "balance": 12.34    \
    } \
]'
// \
// "name": "Savings Account", \
// "number": "1234567898",    \
// "balance": 120.34  \
// }  \
/*
{
    profile: {
        "firstName": String,
        "lastName": String,
        "summary: String,
        "email": String
    },
    education: {
        school: String
        degree: String
        graduation: Sting
    }
    experience: [
        {
            company: String,
            startDate: Date,
            endDate: String,
            title: String,
            Description: String
        }
    ],
    skills: [
        {
            skill: String
            score: Int
        }
    ]
}
*/
