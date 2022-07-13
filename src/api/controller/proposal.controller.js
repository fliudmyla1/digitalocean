const Announce = require("../model/announce.model");
const Townhall = require("../model/townhall.model");

const Proposal = require("../model/proposal.model");
const moment = require('moment');


async function createProposal (req, res, next){
    try {
        let obj ={}
        obj.slug = req.body.slug
        obj.creator = req.body._id
        obj.cid = req.body.cid
        obj.result = {};
        if (req.body.data.f_start_date_at && req.body.data.f_start_time_at && req.body.data.f_end_date_at && req.body.data.f_end_time_at){
            obj.f_start_at = await makeDate(req.body.data.f_start_date_at, req.body.data.f_start_time_at)
            obj.f_end_at = await makeDate(req.body.data.f_end_date_at, req.body.data.f_end_time_at)
        }
        let proposal = new Proposal(Object.assign(obj, req.body.data, {created_at: new Date()}))
        proposal.save().then((p) => {
            res.json({proposal: p})
        })

    } catch (error) {
        console.log('api/controller/announce.controller/createBroadcast' + error)
    }
}

function makeDate(date, time){
    return `${date.split('T')[0]}T${time.HH}:${time.mm}:00.000Z`
}
function groupByVoteOption(indexArray, voteData){
    let array = []
    indexArray.map((i)=>{
        let obj = {}
        obj.option = i
        obj.amount = 0
        voteData.map(v =>{
            if (v.option == i){
                obj.amount += v.balance
                obj.symbol = v.symbol
            }
        })
        array.push(obj)
    })
    array.sort(function(a, b) {
        return b.amount - a.amount;
    });
    return array
}
async function refreshProposalStatus(){
    try {
        let proposals =  await Proposal.find({ $or: [{ status: 0 }, { status: 1 }] }).exec()
        proposals.map(async (proposal)=>{
            let now = new Date()
            let localTimeOffset = now.getTimezoneOffset() * 60 * 1000;
            let localTimeValue = now.getTime() - localTimeOffset
            let serverTimeOffset = moment().utcOffset(proposal.timezone.offset).utcOffset() * 60 * 1000
            if (!proposal.s_start_at){ // still not set the second round or no second round
                let start_at_f = new Date(proposal.f_start_at);
                let startTimeValue = start_at_f.getTime() - serverTimeOffset
                let end_at_f = new Date(proposal.f_end_at);
                let endTimeValue = end_at_f.getTime() - serverTimeOffset
                let toStart = startTimeValue - localTimeValue
                if (toStart > 0){ // expecting
                    proposal.status = 0
                } else { 
                    if (proposal.voters.length > 0){ // if there is voting data, save the voting result
                        let array = await  groupByVoteOption(proposal.options, proposal.voters)
                        proposal.result = array
                    }
                    if (localTimeValue > endTimeValue) {// first round is ended
                        if (proposal.s_start_date_at && proposal.s_start_time_at && proposal.s_end_date_at && proposal.s_end_time_at){ // if there is second round, set for the second round
                            proposal.s_start_at = await makeDate(proposal.s_start_date_at, proposal.s_start_time_at)
                            proposal.s_end_at = await makeDate(proposal.s_end_date_at, proposal.s_end_time_at)
                            proposal.s_voters = []
                            proposal.s_result = []
                            let options = []
                            for (var j = 0 ; j < 2; j++){
                                options.push(proposal.result[j].option)
                            }
                            proposal.s_options = options
                            proposal.status = 0
                        }else{ // voting is ended.
                            // should implement for pinata and web3.storage
                            proposal.status = 2
                        }
                    } else {
                        proposal.status = 1
                    }
                }
            } else { // the second round
                let start_at_f = new Date(proposal.s_start_at);
                let startTimeValue = start_at_f.getTime() - serverTimeOffset
                let end_at_f = new Date(proposal.s_end_at);
                let endTimeValue = end_at_f.getTime() - serverTimeOffset
                let toStart = startTimeValue - localTimeValue
                if (toStart > 0){ // expecting
                    proposal.status = 0
                } else {
                    if (proposal.s_voters.length > 0){ // if there is voting data, save the voting result
                        let array = await  groupByVoteOption(proposal.s_options, proposal.s_voters)
                        proposal.s_result = array
                    }
                    if (localTimeValue > endTimeValue ){
                        proposal.status = 2
                    } else {
                    proposal.status = 1}
                }
            }
            await proposal.save()
        })
    } catch (error) {
        console.log('api/controller/announce.controller/refreshProposalStatus' + error)
    }

    
}

async function getProposalList (req, res, next){
    try {
        await refreshProposalStatus();
        let query = {}
        query.slug = req.body.slug;
        if (req.body.index > -1){
            query.status = req.body.index
        }
        Proposal.find(query).populate('creator').exec()
        .then((list)=>{
            res.json({list: list})
        })
    } catch (error) {
        console.log('api/controller/announce.controller/getAnnouncementList' + error)
    }
}

async function getProposalData (req, res, next){
    try {
        Proposal.findById(req.body._id).populate('creator').exec()
        .then((p)=>{
            res.json({proposal: p})
        })
    } catch (error) {
        console.log('api/controller/proposal.controller/getProposalData' + error)
    }
}
async function sendVote (req, res, next){
    try {
        await Proposal.findByIdAndUpdate(req.body._id, { $push: {voters : {$each: req.body.data}}}).exec()
        await refreshProposalStatus();
        res.json({updated: true})
        // Proposal.findById(req.body._id).exec()
        // .then((p) =>{
        // })
    } catch (error) {
        console.log('api/controller/proposal.controller/sendVote' + error)
    }
}
async function deleteProposal (req, res, next){
    try {
        Proposal.deleteOne({_id: req.body._id}).exec()
        .then(()=>{
            res.json({})
        })
    } catch (error) {
        console.log('api/controller/proposal.controller/' + error)
    }
}
async function sample (req, res, next){
    try {
        // let user = new User({
        //     address: 'sadwdwdw',
        //     role: 1,
        // })
        await user.save()
        User.find({}).then((list) => {
            console.log(list)
        })

        let a = 90
        res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/proposal.controller/' + error)
    }
}
module.exports = {
    createProposal,
    getProposalList,
    getProposalData,
    deleteProposal,
    sendVote
}