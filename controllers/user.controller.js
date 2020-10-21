
// 201 - Resource Created
// 302 - Resource Found
// 301 - Resource Moved Permanently
// 202 - Resource Accepted

const readAll = (req,res) => {
    res.status(302).json({message:'Found ALL'});
};

const readed = (req,res) => {
    res.status(302).json({message:'Found'});
};

const created = (req,res) => {
    res.status(201).json({message:'Created'});
};

const updated = (req,res) => {
    res.status(301).json({message:'Updated'});
};

const deleted = (req,res) => {
    res.status(202).json({message:'Deleted'});
};

module.exports = {
    readAll : readAll,
    readed : readed,
    created : created,
    updated : updated,
    deleted : deleted
}