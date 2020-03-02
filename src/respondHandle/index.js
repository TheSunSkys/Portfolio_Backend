module.exports = {
    Respond,
    ErrRespond
}

function Respond(res, _code, result){
    res.status(200).json({
        code: _code,
        result
    })
}

function ErrRespond(res, _code, msg){
    res.status(_code).json({
        code: _code,
        msg
    })
}